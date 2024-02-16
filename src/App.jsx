import DragZone from "./components/DragZone";
import useFileReader from "./hooks/UseFileReader";

function App() {

  const [{ result, error, file }, setFile] = useFileReader({
    method: "readAsDataURL",
    accept: ["png", "jpg", "jpeg"],
    maxFileSize: 5,
});

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center p-2 bg-white-50 font-poppins">
      <DragZone setFile={setFile} />
      {(error.type === "fileType" || error.type === "fileSize") && <p className="text-red-500 font-medium">{error.msg}</p>}
    </div>
    </>
  )
}

export default App
