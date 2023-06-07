
const Create = () => {

    return (
        <section id="create-page" className="create">
            <form id="create-form" action="/createPay" method="POST" >
                <fieldset>
                    <legend>Add new Paid</legend>
                    <p className="field">
                        <label htmlFor="nameFrom">from Name</label>
                        <span className="input">
                        <select>
                            <option selected value="Admin">Admin</option>
                            <option value="Todor">Todor Yankov Karachorbadzhiev</option>
                            <option value="Dimo">Dimo Yankov Karachorbadzhiev</option>
                            <option value="Ivanka">Ivanka Dimova Karachorbadzhieva</option>
                        </select>
                        </span>
                    </p> 

                    <p className="field">
                    <label htmlFor="amaunt">Amount</label>
                    <span className="input">
                         <input type="number" name="numb" />  
                         </span>                                          
                    </p>
                    <p className="field">
                        <label htmlFor="nameInto">to Name</label>
                        <span className="input">
                        <select>
                            <option selected value="Admin">Admin</option>
                            <option value="Todor">Todor Yankov Karachorbadzhiev</option>
                            <option value="Dimo">Dimo Yankov Karachorbadzhiev</option>
                            <option value="Ivanka">Ivanka Dimova Karachorbadzhieva</option>
                        </select>
                        </span>
                    </p>  

                    <p className="field">
                    <label htmlFor="type">Type</label>
                        <span className="input">
                    <select id="type" name="type">
                                <option value="income">Income(+)</option>
                                <option value="expence">Expense(-)</option>
                                <option value="other">Other</option>
                            </select>
                            </span>
                        </p>
                    <p className="field">
                        <label htmlFor="image">Add doc(Image)</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;