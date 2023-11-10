import "./main-card.css";

const cardMock = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1700438400&Signature=RFmLYhmm~LMJVPwziSPld55W3JCXr~h6UsNMc7oGAAXyXJGtx3StOF2yIa3dnNRgX-JaKenRpHITf5D3TrYjwdJZHxODowxP5C0O2TXJQs8PENM4dX3qJhm6~4Oov-aRexLf1A9a04RHx0NKk8v~kl2-NKqq2pDFLKagitOvjM1fbLRHYlj6c4FAn83hrOWYjRA67~8xoG8utYdlt4oGwajORysXFfrO-3KPd3zRtSg52cxaJy7e6EZZFwbxP7twTfWE-LQ161WapY2U4ZhPkPZ19SfDC38UJ0XGOMoyvl-mtbHr6s0Xp0ALtT9dit8LymcK7grH313x6dO5upSk-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/426c/ea39/cb7585dba1b58ad1b137d50b7424eb72?Expires=1700438400&Signature=c91hY6yewHEV8usMs0meVlCFu9VWrX~ZgJcKCW2qnyqGYQpuFQqDF~--s5C84uZaePIuaeYPig53eRchC4PfqX6sbaCDFHKtruf~hVdeAyRXhxT6ZuEjxKYtVLOqF1QvxTswmNpwE1S4KWC712Rf6jNpysbN8mwAU4uUslzIbpVp2aHPrB16hc6KQd-kaaoznyI8OrdkIi~faiX5LfIy~wMMSCEP-J2J~Vc2JzHQwQgrdFCMvI7o0Xt3dT5kSJUghd3Eltr1sHAeJ7dv4ce1nXgKHMc80NtnLwaJqcnsKKibMlyMNwF282Tn2~cBg2sP6k7-m3Rg1yhJX7EAbwqTuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/097d/8805/7996f61cddab0708f90589b5862464d9?Expires=1700438400&Signature=jbU32ozpObcJ1icbJyJcu9kMMf0LOKH83g2QnyEpGEi3iJZnPnQCfilbiBZvZiafIZvw-4lecrCUY-pDBT990PkygnPdcpkdE6F6SITPSaa9OF-XNGyf4IPLsBmOLZXvK2AtZ14X3NbbXsYXimIJDN43eBFrl25MnemN-kvrzY8f~rEce1SuQL74k4JVFUMj1zVODYD5gxbcSPcpEzZnyRZDiJCFDoPJOO2QxlOxQGAsmq1xfl8s3nqbU8nKXuqdT-sczrPqUnXZddcomqi9qyc-L26r-zf2V12V8JUxmcz7ymqly9dtUj8XqGf2DzFOu-pqQDZOjXuXUdQjrzngQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f2ba/60e7/d0a151a8679c9019f7b2fd3280ed672a?Expires=1700438400&Signature=PtIYlgJgFZTKW7IuuJA5nJYJPefqHXo0mi1Rnv9T3LccrLqxtgg-PfL2vQjOkDWyPC7wxTUsvaX4iiYkvl4arpgPZWNSBdjTtYhhdEF9GV5R0~u9xQJM9zJqJwdWb1HAcWTASWB9hRJ1AURYWA5JooLalk3y4IxGtLlg1GrBD9-3t8nVc9wtdomxtJrLHc-H9YlrTOUQZMTTbJ8DPBeZ1zcgtNg7GsA8nqYIC8MUegIIEekhwraJtrzVp6PajLD0gZmZ3zzeU-Vt716fPVi-SV0RfuPmAMB6hNLHVc9QqD-bGnwSqADMeE4Tfa8SXW5fzDcLKwIP4PsLUExsoxW-Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1700438400&Signature=RFmLYhmm~LMJVPwziSPld55W3JCXr~h6UsNMc7oGAAXyXJGtx3StOF2yIa3dnNRgX-JaKenRpHITf5D3TrYjwdJZHxODowxP5C0O2TXJQs8PENM4dX3qJhm6~4Oov-aRexLf1A9a04RHx0NKk8v~kl2-NKqq2pDFLKagitOvjM1fbLRHYlj6c4FAn83hrOWYjRA67~8xoG8utYdlt4oGwajORysXFfrO-3KPd3zRtSg52cxaJy7e6EZZFwbxP7twTfWE-LQ161WapY2U4ZhPkPZ19SfDC38UJ0XGOMoyvl-mtbHr6s0Xp0ALtT9dit8LymcK7grH313x6dO5upSk-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },

  {
    image:
      "https://s3-alpha-sig.figma.com/img/426c/ea39/cb7585dba1b58ad1b137d50b7424eb72?Expires=1700438400&Signature=c91hY6yewHEV8usMs0meVlCFu9VWrX~ZgJcKCW2qnyqGYQpuFQqDF~--s5C84uZaePIuaeYPig53eRchC4PfqX6sbaCDFHKtruf~hVdeAyRXhxT6ZuEjxKYtVLOqF1QvxTswmNpwE1S4KWC712Rf6jNpysbN8mwAU4uUslzIbpVp2aHPrB16hc6KQd-kaaoznyI8OrdkIi~faiX5LfIy~wMMSCEP-J2J~Vc2JzHQwQgrdFCMvI7o0Xt3dT5kSJUghd3Eltr1sHAeJ7dv4ce1nXgKHMc80NtnLwaJqcnsKKibMlyMNwF282Tn2~cBg2sP6k7-m3Rg1yhJX7EAbwqTuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f2ba/60e7/d0a151a8679c9019f7b2fd3280ed672a?Expires=1700438400&Signature=PtIYlgJgFZTKW7IuuJA5nJYJPefqHXo0mi1Rnv9T3LccrLqxtgg-PfL2vQjOkDWyPC7wxTUsvaX4iiYkvl4arpgPZWNSBdjTtYhhdEF9GV5R0~u9xQJM9zJqJwdWb1HAcWTASWB9hRJ1AURYWA5JooLalk3y4IxGtLlg1GrBD9-3t8nVc9wtdomxtJrLHc-H9YlrTOUQZMTTbJ8DPBeZ1zcgtNg7GsA8nqYIC8MUegIIEekhwraJtrzVp6PajLD0gZmZ3zzeU-Vt716fPVi-SV0RfuPmAMB6hNLHVc9QqD-bGnwSqADMeE4Tfa8SXW5fzDcLKwIP4PsLUExsoxW-Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/097d/8805/7996f61cddab0708f90589b5862464d9?Expires=1700438400&Signature=jbU32ozpObcJ1icbJyJcu9kMMf0LOKH83g2QnyEpGEi3iJZnPnQCfilbiBZvZiafIZvw-4lecrCUY-pDBT990PkygnPdcpkdE6F6SITPSaa9OF-XNGyf4IPLsBmOLZXvK2AtZ14X3NbbXsYXimIJDN43eBFrl25MnemN-kvrzY8f~rEce1SuQL74k4JVFUMj1zVODYD5gxbcSPcpEzZnyRZDiJCFDoPJOO2QxlOxQGAsmq1xfl8s3nqbU8nKXuqdT-sczrPqUnXZddcomqi9qyc-L26r-zf2V12V8JUxmcz7ymqly9dtUj8XqGf2DzFOu-pqQDZOjXuXUdQjrzngQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/426c/ea39/cb7585dba1b58ad1b137d50b7424eb72?Expires=1700438400&Signature=c91hY6yewHEV8usMs0meVlCFu9VWrX~ZgJcKCW2qnyqGYQpuFQqDF~--s5C84uZaePIuaeYPig53eRchC4PfqX6sbaCDFHKtruf~hVdeAyRXhxT6ZuEjxKYtVLOqF1QvxTswmNpwE1S4KWC712Rf6jNpysbN8mwAU4uUslzIbpVp2aHPrB16hc6KQd-kaaoznyI8OrdkIi~faiX5LfIy~wMMSCEP-J2J~Vc2JzHQwQgrdFCMvI7o0Xt3dT5kSJUghd3Eltr1sHAeJ7dv4ce1nXgKHMc80NtnLwaJqcnsKKibMlyMNwF282Tn2~cBg2sP6k7-m3Rg1yhJX7EAbwqTuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/097d/8805/7996f61cddab0708f90589b5862464d9?Expires=1700438400&Signature=jbU32ozpObcJ1icbJyJcu9kMMf0LOKH83g2QnyEpGEi3iJZnPnQCfilbiBZvZiafIZvw-4lecrCUY-pDBT990PkygnPdcpkdE6F6SITPSaa9OF-XNGyf4IPLsBmOLZXvK2AtZ14X3NbbXsYXimIJDN43eBFrl25MnemN-kvrzY8f~rEce1SuQL74k4JVFUMj1zVODYD5gxbcSPcpEzZnyRZDiJCFDoPJOO2QxlOxQGAsmq1xfl8s3nqbU8nKXuqdT-sczrPqUnXZddcomqi9qyc-L26r-zf2V12V8JUxmcz7ymqly9dtUj8XqGf2DzFOu-pqQDZOjXuXUdQjrzngQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1700438400&Signature=RFmLYhmm~LMJVPwziSPld55W3JCXr~h6UsNMc7oGAAXyXJGtx3StOF2yIa3dnNRgX-JaKenRpHITf5D3TrYjwdJZHxODowxP5C0O2TXJQs8PENM4dX3qJhm6~4Oov-aRexLf1A9a04RHx0NKk8v~kl2-NKqq2pDFLKagitOvjM1fbLRHYlj6c4FAn83hrOWYjRA67~8xoG8utYdlt4oGwajORysXFfrO-3KPd3zRtSg52cxaJy7e6EZZFwbxP7twTfWE-LQ161WapY2U4ZhPkPZ19SfDC38UJ0XGOMoyvl-mtbHr6s0Xp0ALtT9dit8LymcK7grH313x6dO5upSk-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f2ba/60e7/d0a151a8679c9019f7b2fd3280ed672a?Expires=1700438400&Signature=PtIYlgJgFZTKW7IuuJA5nJYJPefqHXo0mi1Rnv9T3LccrLqxtgg-PfL2vQjOkDWyPC7wxTUsvaX4iiYkvl4arpgPZWNSBdjTtYhhdEF9GV5R0~u9xQJM9zJqJwdWb1HAcWTASWB9hRJ1AURYWA5JooLalk3y4IxGtLlg1GrBD9-3t8nVc9wtdomxtJrLHc-H9YlrTOUQZMTTbJ8DPBeZ1zcgtNg7GsA8nqYIC8MUegIIEekhwraJtrzVp6PajLD0gZmZ3zzeU-Vt716fPVi-SV0RfuPmAMB6hNLHVc9QqD-bGnwSqADMeE4Tfa8SXW5fzDcLKwIP4PsLUExsoxW-Rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Keepitreal",
    text: "Total Sales: 34.53 ETH",
  },
];

const MainCard = () => {
  return (
    <>
      <section className="wrapper"> 
        <div className="flex justify-between mb-16">
          <div className="text-white">
            <h2 className="text-4xl font-semibold">Top creators</h2>
            <p className="text-xl mt-2.5">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className="flex items-end">
            <button className="btn text-white">View Rankings</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {cardMock.map((element, index) => (
            <div key={index} className="box">
              <img className="img" src={element.image} alt="" />
              <h3 className="text-white text-center">{element.title}</h3>
              <p className="text-center text-gray-500">
                Total Sales:<span className="text-white ml-2.5">34.53</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainCard;
