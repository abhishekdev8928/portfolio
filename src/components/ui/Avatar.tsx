
interface AvatarProps {
  imageSrcList: {
    id: number;
    imageSrc: string;
  }[],
  
}

const Avatar = ({imageSrcList }:AvatarProps) => {
  return <>

  {
    imageSrcList.map(item => <div className={` ${item.id !== 1 && "-ml-2"}  size-10  rounded-full overflow-hidden bg-[rgba(217, 217, 217, 1)]`} >
        <img className="w-full h-full object-cover " src={item.imageSrc} alt="" />
    </div>)
  }
  
  </>;
};

export default Avatar;
