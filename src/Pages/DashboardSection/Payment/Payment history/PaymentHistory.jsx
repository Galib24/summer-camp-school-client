/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


const PaymentHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://summer-camp-fitness-school-server.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setHistory(data)
                setLoading(false)

            })
    }, [])
    // console.log(history);
    // const sortedByDate = history.sort((a, b)=> new b.date - new a.data)
    // console.log(sortedByDate);
    // // const sortedInstructors = classes.sort((a, b) => b.students_enrolled - a.students_enrolled);
    return (
        <>
            <div className=" w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((ht, index) =>  <tr
                            key={ht._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>{ht.email}</td>
                                <td>{ht.date}</td>
                                <td>{ht.price}</td>
                                <td>{ht.status}</td>
                                <td>{ht.transactionId}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default PaymentHistory;