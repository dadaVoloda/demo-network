import { useState } from 'react'
import styles from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalItemsCount/pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && 
        <button className={styles.prev} onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
      }
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page, i) => {
          return <button
            key={i}
            className={currentPage === page ? styles.selectedPage : ''}
            onClick={(e) => onPageChanged(page)}
            >{page}</button>
      })}
      {portionCount > portionNumber && 
        <button className={styles.next} onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
      }
    </div>
  )
}

export default Paginator