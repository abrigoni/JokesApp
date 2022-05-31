import React from 'react';
import AppContextProvider from './context/AppContext';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql/client';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

// import Realm from 'realm';

// const TaskSchema = {
//   name: 'Task',
//   properties: {
//     _id: 'int',
//     name: 'string',
//     status: 'string',
//   },
//   primaryKey: '_id',
// };

// type Task = {
//   _id: number;
//   name: string;
//   status: string;
// };
// const task1Towrite = {
//   _id: 1,
//   name: 'go grocery shopping',
//   status: 'Open',
// };

// (async () => {
//   const realm = await Realm.open({
//     path: 'myrealm',
//     schema: [TaskSchema],
//   });
//   let task1, task2;
//   realm.write(() => {
//     task1 = realm.create("Task", {
//       _id: 1,
//       name: 'go grocery shopping',
//       status: 'Open',
//     } as any);
//     task2 = realm.create('Task', {_id: 1, name: 'go to gym', status: 'Open'} as any);
//     console.log(`created two tasks: ${task1.name} & ${task2.name}`);
//   });
//   // use task1 and task2
//   const tasks = realm.objects('Task');
//   console.log(`The list of task are ${tasks.map((task: any) => task.name)}`);
//   const tasksByName = tasks.sorted("name");
//   console.log(
//     `The lists of tasks in alphabetical order are: ${tasksByName.map(
//       (taskByName: any) => taskByName.name
//     )}`
//   );
// })();


const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
