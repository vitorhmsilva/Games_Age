import { BsPlaystation, BsXbox } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdCatchingPokemon } from 'react-icons/md';

export const GetPlatform = (platform) => {
  switch (platform.props) {
    case 1:
      return <HiOutlineDesktopComputer color="#e8e0e0" size={'42px'} />;
    case 2:
      return <BsPlaystation color="#e8e0e0" size={'42px'} />;
    case 3:
      return <BsXbox color="#e8e0e0" size={'42px'} />;
    case 4:
      return <MdCatchingPokemon color="#e8e0e0" size={'42px'} />;
  }
};
