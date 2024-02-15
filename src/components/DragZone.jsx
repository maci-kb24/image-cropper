import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

const DragZone = () => {
    const [dragOver, setDragOver] = useState(false);

    const handleDragLeave = (e) => { 
        e.preventDefault();
        setDragOver(false);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
    }
  return (
    <div className={`h-[300px] max-w-[500px] w-full border-2 border-dashed rounded-lg flex items-center justify-center flex-col gap-y-2 ${dragOver ? "border-primary-50" : "border-primary-30"
    }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
    >
        <RiImageAddFill
            size={42}
            className="text-gray"
        />
        <p className="text-gray text-center font-medium">
                Drag and drop an image file or <br />
                <label
                    htmlFor="image-file"
                    className="text-primary-30 underline cursor-pointer hover:text-primary-50"
                >
                    browse to upload
                </label>
            </p>
    </div>
  )
}

export default DragZone