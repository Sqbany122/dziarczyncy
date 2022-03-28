export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='navbar-header'>
        <a className='navbar-brand page-scroll' href='/'>
          <img src="/inc/dziarczyncy-logo-long.png" width="240px" className="logo" />
        </a>{' '}
      </div>
      <div className="reservation">
          <a href="#">Zarezerwuj</a>
      </div>
    </nav>
  )
}
