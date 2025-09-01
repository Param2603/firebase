import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";

const App = () => {
  const [inputText, setInputText] = useState("");              
  const [todoData, setTodoData] = useState([]);   
  const [editId, setEditId] = useState("");
  const [boolean, setBoolean] = useState(false);

  const database = collection(db, "mydata");

    async function handleAdd(){
    if (!inputText.trim()) {
      alert("enter your task first");
      return;
    }
    try {
      await addDoc(database, { todo: inputText });
      alert("task added successfully ");
    } catch (error) {
      alert("message", error);
    }
    getData();
    setInputText("");
  }

  async function getData() {
    const data = await getDocs(database);
    // console.log(data, "data");
    setTodoData(data.docs.map((doc) => ({
        id: doc.id,...doc.data()}))
    );
  }

  async function handleDelete(id) {
    let deleteData = doc(database, id);
    await deleteDoc(deleteData);
    alert("Task Deleted Suceessfully");
    getData();
  }

  function handleEdit(data) {
    setInputText(data.todo);
    setBoolean(true);
    setEditId(data.id);
  }

  async function handleUpdate() {
    if (!inputText.trim()) {
      alert("Enter Text First");
      return;
    }
    let updateData = doc(database, editId);
    await updateDoc(updateData, { todo: inputText });
    alert(" TAsk updated successfully");
    setBoolean(false);
    setInputText("");
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Todo List</h1>
        </div>

        <div className="flex mb-6">
          <input type="text" placeholder="Enter your task..."
           value={inputText} onChange={(e) => setInputText(e.target.value)} 
           className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

          {boolean ? (
            <button onClick={handleUpdate}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-lg font-medium disabled:opacity-50 transition-colors"> Update </button>
          ) : (
              <button onClick={handleAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium disabled:opacity-50 transition-colors"> Add </button>
          )}
        </div>

        <div className="mt-8">
          {todoData.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700">No tasks added yet</h2>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Tasks</h2>
              {todoData.map((item) => {
                return (
                  <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition-shadow">
                    <p className="text-gray-800 font-medium">{item.todo}</p>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(item)}
                        className="text-indigo-600 hover:text-indigo-800 p-2 rounded-full hover:bg-indigo-50 transition-colors"> Edit </button>
                      <button onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"> Delete </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;