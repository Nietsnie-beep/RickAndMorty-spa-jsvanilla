const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; 
//encontras el hsah id ['', '', '']

export default getHash; 