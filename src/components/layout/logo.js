import logo from '@/logo.png';

const style = {
  height: '64px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundImage: logo,
};
export default function LogoComponent() {
  return (
    <>
      <div style={style} />
    </>
  );
}
