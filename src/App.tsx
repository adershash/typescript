import './App.css'
import Media from './components/Media/Media'



function App() {


  return (
    <div className='w-full h-screen overflow-auto flex flex-col gap-2 p-10 bg-slate-900 font-open-sans '>
      <Media type='image' src='https://picsum.dev/300/200' 
      containerClasses='w-[20%] h-[35%] bg-red-500 rounded-lg'
      mediaClasses='w-full h-full object-cover rounded-lg'/>

      <Media type='video' src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      containerClasses='w-[70%] h-[60%] '
      mediaClasses='w-full h-full object-cover'
      controls
      autoPlay/>
    </div>
  )
}

export default App
