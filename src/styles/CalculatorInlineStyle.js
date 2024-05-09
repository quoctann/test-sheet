const sMain = {
  width: '300px',
  height: 'auto',
  margin: '0 auto',
  backgroundColor: '#5b5253',
  boxSizing: 'border-box',
  padding: '0px',
  // borderRadius: '5px',
}

const sMyRow = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  padding: 0,
  margin: 0,
  marginBottom: '0px',
}

const sButton = {
  color: 'white',
  width: '50px',
  height: '60px',
  border: 'solid #5b5253 1px',
  backgroundColor: '#847d7d',
  fontSize: '16pt',
  margin: '0',
  boxSizing: 'border-box',
  fontSize: '15pt',
  flexGrow: '1',
  transition: 'background-color .1s ease-in, border .3s ease-in',
}

const sInput = {
  width: '100%',
  height: '70px',
  margin: '25px auto 0px auto',
  padding: '0 20px 3px 0',
  boxSizing: 'border-box',
  fontSize: '26pt',
  textAlign: 'right',
  backgroundColor: '#5b5253',
  color: 'white',
  border: 'none',
}

const sSecondary = {
  color: 'white',
  backgroundColor: '#fd9e2b',
  transition: 'background-color .1s ease-in',
}

const sDarkGray = {
  backgroundColor: '#6b6364',
}

const sBtn0 = { flexGrow: 4 }

const sBtn1 = { flexGrow: 1 }

const sCenterVertically = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}

export {
  sCenterVertically,
  sBtn0,
  sBtn1,
  sMain,
  sMyRow,
  sButton,
  sInput,
  sSecondary,
  sDarkGray,
}
