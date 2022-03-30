import { Link } from 'react-router-dom'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='navbar-header'>
        <Link className='navbar-brand page-scroll' to='/'>
          <img src="/inc/dziarczyncy-logo-long.png" width="240px" className="logo" />
        </Link>{' '}
      </div>
      <div className="reservation">
          <a href="#">Zarezerwuj</a>
      </div>
    </nav>
  )
}
