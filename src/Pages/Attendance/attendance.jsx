import './attendance.css'
import Table from '../../Components/Tabular/tabular.jsx'
import Data from '../../dummy.json'

const attendance = () => {

  return (
    <div className='container'>
      <div className="upperSection">
        
      
        {Data.map((info) => (
          <div>
            <p><b>Name</b>    : {info.Name}</p>
            <p><b>USN</b>     : {info.USN}</p>
            <p><b>Semester</b>: {info.Semester}</p>
            <p><b>Branch</b>  : {info.Branch}</p>
          </div>
        ))}

        
      </div>
      <div className="lowerSection">
        <Table />
      </div>
    </div>
  )
}

export default attendance


