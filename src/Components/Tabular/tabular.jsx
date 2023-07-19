import './tabular.css'
import Data from '../../dummy.json'

const tabular = () => {


    return (
        <div className='container1'>
            <table>
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Sunject Code</th>
                        <th>Subject Name</th>
                        <th>Total Classes Conducted</th>
                        <th>Total Classes Attended</th>
                        <th>Attendance%</th>
                    </tr>
                </thead>
                <tbody>

                    {Data.map((subject) => {
                        const data = subject.Attendance;

                        return data.map((info, index) => {
                            const {
                                subjectCode,
                                subjectName,
                                totalClassConducted,
                                totalClassAttended,
                                attendancePercentage,
                            } = info;

                            return (
                                <tr key={index}>
                                    <td style={{ backgroundColor: 'rgb(203, 206, 58)' }}>{index + 1}</td>
                                    <td>{subjectCode}</td>
                                    <td>{subjectName}</td>
                                    <td>{totalClassConducted}</td>
                                    <td>{totalClassAttended}</td>
                                    <td style={{ backgroundColor: attendancePercentage < 75 ? 'rgb(245, 131, 131)' : 'rgb(201, 201, 201)' }}>{attendancePercentage}%</td>
                                </tr>
                            );
                        });
                    })}




                </tbody>
            </table>
        </div>
    )
}

export default tabular
