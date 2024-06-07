import './App.css';
import {Button} from "./components/Button";
import Person from "./components/Person";


const Text = ()=>{
    return <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur beatae commodi dignissimos dolorum error odit quo quod veritatis voluptatibus
        . Ab aliquam aut distinctio illo repellendus sint temporibus velit vitae.
    </div>
}
function App() {
    const b = 10;
  return (
    <div className="App">
        <h1>hello world</h1>
        <Text/>
        <Button text = {'open'}/>
        <Button text = {'close'}/>
        <Button text = {'tap'}/>
        <Button text = {'get'}/>
        <Person name={'Syrgak'} age={21} city={'Bishkek'} status={'Student'}/>

    </div>
  );
}

export default App;

