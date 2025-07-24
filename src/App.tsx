import './App.css'
import Card from './components/Card/Card'
import Media from './components/Media/Media'
import Button from './components/Button/Button'



function App() {


  return (
    <div className='w-full h-screen  overflow-auto flex items-start overflow-x-auto  gap-2 p-10 bg-slate-900 font-open-sans '>
      <Card classes='w-[80%]  md:w-[20%]  rounded bg-orange-500 shrink-0 ' varient='fill'>
       
          <Media type='image' src='https://picsum.dev/300/200' mediaClasses='w-full h-full  object-cover rounded'/>
           <div className='p-4'>
            <h1 className='text-white text-2xl font-extrabold'>hello</h1>
            <p className='text-white text-sm font-bold mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.</p>
            <Button varient='primary' size='md' classes='mt-4'>Read more</Button>

            </div>
        
      </Card>
        <Card classes='w-[80%]  md:w-[20%]  rounded bg-orange-500 shrink-0' varient='fill'>
       
          <Media type='image' src='https://picsum.dev/300/200' mediaClasses='w-full h-full  object-cover rounded'/>
           <div className='p-4'>
            <h1 className='text-white text-2xl font-extrabold'>hello</h1>
            <p className='text-white text-sm font-bold mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.</p>
            <Button varient='primary' size='md' classes='mt-4'>Read more</Button>

            </div>
        
      </Card>
        <Card classes='w-[80%]  md:w-[20%]  rounded bg-orange-500 shrink-0 ' varient='fill'>
       
          <Media type='image' src='https://picsum.dev/300/200' mediaClasses='w-full h-full  object-cover rounded'/>
           <div className='p-4'>
            <h1 className='text-white text-2xl font-extrabold'>hello</h1>
            <p className='text-white text-sm font-bold mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.</p>
            <Button varient='primary' size='md' classes='mt-4'>Read more</Button>

            </div>
        
      </Card>
    
    </div>
  )
}

export default App
