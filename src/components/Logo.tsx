import logo from '@/assets/logo.svg';

function Logo() {
  return (
    <div className='flex items-center gap-3 font-semibold text-lg'>
      <img
        src={logo}
        alt='Tasky Ai'
        className='w-6 h-6'
      />
      Tasky AI
    </div>
  );
}

export default Logo;
