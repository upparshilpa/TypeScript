import "./App.css";

// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Greet } from "./components/Greet";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Container } from "./components/Container";
// import { LoggedIn } from "./components/LoggedIn";
// import { User } from "./components/User";
// import { Counter } from "./components/Counter";
// import { ThemeContextProvider } from "./components/ThemeContext";
// import { Box } from "./components/Box";
// import { UserContextProvider } from "./components/UserContext";
// import { UserTwo } from "./components/UserTwo";
// import { DomRef } from "./components/DomRef";
// import { MutableRef } from "./components/MutableRef";
// import { CounterTwo } from "./components/CounterTwo";
// import { Private } from "./components/Private";
// import { Profile } from "./components/Profile";
// import { List } from "./components/List";
// import { RandomNumber } from "./components/RandomNumber";
// import { Toast } from "./components/Toast";
//import { CustomButton } from "./components/CustomButton";
import { Text } from "./components/Text";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const namesList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Abu" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={namesList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Taylor Swift!</Heading>
      </Oscar>
      <Greet name="Abu" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn /> 
      <User />
      <Counter />
      // <ThemeContextProvider>
      //   <Box />
      // </ThemeContextProvider>
      // <UserContextProvider>
      //   <UserTwo />
      // </UserContextProvider>
      <DomRef />
      <MutableRef />
      <CounterTwo message="The count value is" />
      <Private isLoggedIn={true} component={Profile} />
      // <List
      //   items={["Batman", "Superman", "Wonder Woman"]}
      //   onClick={(item) => console.log(item)}
      // />
      // <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      // <List items={[
      //   {
      //     first: "Bruce",
      //     last: "Wayne"
      //   },
      //   {
      //     first: "Clark",
      //     last: "Kent"
      //   },
      //   {
      //     first: "Princess",
      //     last: "Diana"
      //   }
      // ]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      // <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
      //   Primary Button
      // </CustomButton> */}
      <Text as="h2" size="l"> 
        {/* Heading */}
        </Text>
      <Text as="p" size="m">
        Paragraph
      </Text>
      <Text as="label" size="s" color="secondary">
        Label
      </Text>
    </div> 
  );
}

export default App;
