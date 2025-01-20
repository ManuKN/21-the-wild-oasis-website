function Logo() {
  return (
    <a href='/' className='flex items-center gap-4 z-10'>
      <img src='/logo.png' height='60px' width='60px' alt='logo' />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </a>
  );
}

export default Logo;
