import preloader from '../../../assets/images/preloader.gif'

const Preloader = (props) => {
  return (
    <div>
      <img style={{position: 'absolute', top: '38%', left: '50%'}} src={preloader}/>
    </div>
  )
}

export default Preloader