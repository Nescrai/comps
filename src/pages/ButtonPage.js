import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
       
    }

  return (
    <div>
      <div>
        <Button success outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning onMouseEnter={handleClick}>
          See deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Somthing
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
