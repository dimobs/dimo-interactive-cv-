import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <>
        <h2>Administrator Panel</h2>
            <div>
                <Link className="button" to="/admin/create">Create Payment Document</Link>
            </div>
            <div>
                <Link className="button" to="/admin/IbanCardDetails">Add Iban Card Number</Link>
            </div>
        </>

    )
};

export default Admin;