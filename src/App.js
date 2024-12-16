import './App.css'

function test()
{
  alert('this works!!!')
}

const Square = ({content, className}) =>
(
  <div class={className} style={{backgroundColor: '#060CE9'}} onClick={test}>
    <p>{content}</p>
  </div>
)

const Squares = ({className, contents}) =>
{ 
  const grid = contents.map((content) => <Square content={content} className={className}/>)
  return <div class='grid-container'>{grid}</div> 
}

const App = () =>
  {
    let categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F']
    //TODO: find better way to make this
    let answers = ['$200','$200','$200','$200','$200','$200',
                   '$400','$400','$400','$400','$400','$400',
                   '$600','$600','$600','$600','$600','$600',
                   '$800','$800','$800','$800','$800','$800',
                   '$1000','$1000','$1000','$1000','$1000','$1000'
                  ]
    
    return  (
      <div className='app'>
        <Squares className='categories' contents={categories}/>
        <Squares className='answers' contents={answers}/>
      </div>
    )
  }

export default App
