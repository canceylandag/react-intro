const NewPerson = (props) => {


    const person = props.individual;
    const functions=props.func;
    return (

        <>
            {
                <tr>




                    <td>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.age}</td>
                    <td>{person.job}</td>
                    <td>{person.salary}</td>
                    <td>
                        <button onClick={()=>functions.openCreateUpdateModal(person.id)}>Düzenle</button>
                        <button onClick={()=>functions.openDeleteModal(person.id)}>Sil</button>
                    </td>

                </tr>
            }

        </>
    );


}


export default NewPerson;