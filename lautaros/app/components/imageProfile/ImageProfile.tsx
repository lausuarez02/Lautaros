interface ImageProps{
    size: "big" | "small" 
}

const ImageProfile = ({size}: ImageProps) => {
    if(size === "small"){
        return(
            <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        )
    }
    return (
      <>
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-50 w-50 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </>
    )
  }

export default ImageProfile;