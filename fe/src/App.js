import { useState } from 'react';

function App() {
    const [data, setData] = useState([]);
    const handleData = () => {
        setData(['Banana', 'Orange', 'Apple', 'Mango']);
        console.log(data);
    };
    const deleteData = (i) => {
        data.splice(i, 1);
        console.log(data);
    };
    return (
        <div className="App">
            <button onClick={() => handleData()}>add data</button>
            <button onClick={() => deleteData(1)}>delete data</button>
        </div>
    );
}

export default App;
