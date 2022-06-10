import Greeter from './Greeter/Greeter';
import Meetings from './Meetings/Meetings';
import About from './About/About';
import Officers from './Officers/Officers';
import FAQ from './FAQ/FAQ';

function Home() {
  return (
    <div>
    	<Greeter/>
			<Meetings/>
      <About/>
      <Officers/>
      <FAQ/>
		</div>
  );
}

export default Home