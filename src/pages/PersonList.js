import NewPerson from "../components/newPerson";

const PersonList = (props) => {


    const list = props.list;
    const functions=props.functions;

    return (


        <>

            <div className="person-lists">

                <div>
                    <button onClick={()=>functions.openCreateUpdateModal(null)}>Ekle</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Ad Soyad</th>
                            <th>Yaş</th>
                            <th>Meslek</th>
                            <th>Maaş</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((x) => (<NewPerson individual={x} func={functions} />))
                        }
                    </tbody>
                </table>


            </div>


        </>

    )

}

export default PersonList;