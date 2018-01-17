export default {
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imageCurrent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  component: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain'
  },
  navi_left: {
    position: 'fixed',
    top: 20,
    left: 20
  },
  navi: {
    position: 'fixed',
    top: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  naviItem: {
    display: 'flex',
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    marginLeft: 10,
    padding: 5,
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    boxSizing: 'border-box',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    position: 'fixed',
    bottom: 20,
    left: 20
  },
  progress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
}
