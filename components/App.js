import React from "react";
import ReactDOM from "react-dom/client";

console.log("Created with vibe template: https://github.com/aipx-proto/vibe-template");

// Image assets from Figma export
const imgSubtract = "http://localhost:3845/assets/9408d51e3727d8b47eb5bd7ee7dbfd8906567d77.png";
const imgIcon = "http://localhost:3845/assets/35f2e8cfd36989954026e171c5aeb9dc871f291c.svg";
const img = "http://localhost:3845/assets/e7dee0206021200e31fe69024c62f2eb57f2a58c.svg";
const imgShape = "http://localhost:3845/assets/562a41cd964255856808003dfb4743f813a29e18.svg";
const imgShape1 = "http://localhost:3845/assets/37d67b4ff5a3ba7f4e83a3e4a116e751869d69be.svg";
const imgShape2 = "http://localhost:3845/assets/a650e0054a7d4c436b77b5cc2cc612885d84b219.svg";
const img1 = "http://localhost:3845/assets/9294e82ab7e3b830d76972c4273d1cc94b1024e4.svg";
const img2 = "http://localhost:3845/assets/41043efd0c57cea9d7d5afc75c2d847915428459.svg";
const img3 = "http://localhost:3845/assets/1be0e0a83ed4f1222444a956cc40bf3c47e71232.svg";
const img4 = "http://localhost:3845/assets/40ae255ddd989c79bb2f0c8e5f729b0fae8d2a74.svg";
const img5 = "http://localhost:3845/assets/e1a6606599d8a4144b25a1a23dc0ddccaac4dd58.svg";
const img6 = "http://localhost:3845/assets/e507f7872f9e34970c94d8dff2458ea919f5a6b3.svg";
const img7 = "http://localhost:3845/assets/fdcadd84ccdefa290994a843a9234338710cd22b.svg";
const img8 = "http://localhost:3845/assets/3945a33fa754175c7efd89101c14853d5af299d8.svg";
const img9 = "http://localhost:3845/assets/d203655b88c2c741e2290c3c66ef9da98a3f1c02.svg";
const img10 = "http://localhost:3845/assets/77343763753b3edb6556364ff72a830e2ecc1ce2.svg";
const img11 = "http://localhost:3845/assets/2961ccbd04d54327dfb90ae5f5b30d773e6b45e2.svg";
const img12 = "http://localhost:3845/assets/dcf98211b00c15a695cac01230aac3daf6f85e2a.svg";
const img13 = "http://localhost:3845/assets/469668fad01c04df40c561f28149a18f5377946a.svg";
const img14 = "http://localhost:3845/assets/016c89064d89dcc68bab485bf023e24c7330261a.svg";
const img15 = "http://localhost:3845/assets/8d2a6f657da0848dcb73e0eb7a333de6b473fe47.svg";
const img16 = "http://localhost:3845/assets/aa5939dbd0e1d2417d4383bdc79a330032f0c4f8.svg";
const img17 = "http://localhost:3845/assets/4461af605de8714c3e86d089ad8644971679c43e.svg";
const img18 = "http://localhost:3845/assets/084ec23bfdca8019a777a7c86acc9cf7c07bd532.svg";
const img19 = "http://localhost:3845/assets/d417e607d7ed62cdd47bfc1f8972c1e70ec56a4c.svg";
const img20 = "http://localhost:3845/assets/64205a64d41a54ed407d70b39f0d19f71979ca13.svg";
const img21 = "http://localhost:3845/assets/040ab9acc16e42b6b88fe476562fdb23c30812cf.svg";
const img22 = "http://localhost:3845/assets/fd8353964ecb263deb3a1d0ed98fa45a32a34bfc.svg";
const img23 = "http://localhost:3845/assets/6b989698f6cb9c0bc076adcfed4b9874f69e3892.svg";
const img24 = "http://localhost:3845/assets/316834acb27a2639e2078e7086dfb090d1d1f53d.svg";

function App() {
  return (
    <main className="bg-page min-h-screen flex flex-col items-center w-full">
      {/* Banner/Header */}
      <header className="w-full h-11 flex items-center justify-between px-3 py-2 bg-white/80 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex items-center p-2">
            <img src={imgIcon} alt="Azure AI Logo" className="w-4 h-4" />
          </span>
          <span className="text-xs text-heading font-semibold">Azure AI Foundry</span>
        </div>
        <nav className="flex items-center gap-2">
          <button className="btn type-transparent size-sm">All projects</button>
          <button className="btn type-subtle icon-only size-sm" title="Megaphone">
            <img src={imgShape} alt="Megaphone" className="w-5 h-5" />
          </button>
          <button className="btn type-subtle icon-only size-sm" title="Settings">
            <img src={imgShape1} alt="Settings" className="w-5 h-5" />
          </button>
          <button className="btn type-subtle icon-only size-sm" title="Emoji">
            <img src={imgShape2} alt="Emoji" className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 px-2">
            <div className="text-[10px] text-muted text-right">
              <div className="font-semibold">Contoso-hub</div>
              <div>EastUS</div>
            </div>
            <img src={imgSubtract} alt="Avatar" className="w-6 h-6 rounded-full" />
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <section className="flex flex-col items-center w-full py-8 px-2">
        <div className="w-full max-w-[1060px] bg-card rounded-2xl shadow p-6 mb-8">
          <div className="flex flex-row items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-heading">Jump into a project in Azure AI Studio</h1>
            <div className="flex gap-2">
              <button className="btn type-transparent text-link font-semibold">View all projects</button>
              <button className="btn type-primary font-semibold flex items-center gap-1">
                <img src={img1} alt="Create" className="w-4 h-4" />
                Create project
              </button>
              <button className="btn type-transparent font-semibold flex items-center gap-1">
                <img src={img2} alt="Help" className="w-4 h-4" />
                Help
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline">
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2">Project name <img src={img3} alt="Sort" className="inline w-4 h-4 align-middle" /></th>
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2">AI hub</th>
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2 opacity-0">Project <img src={img3} alt="Sort" className="inline w-4 h-4 align-middle" /></th>
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2">Description</th>
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2">Region</th>
                  <th className="text-left text-sm font-semibold text-heading px-2 py-2">Created on</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline">
                  <td className="text-link px-2 py-3">Contoso-project</td>
                  <td className="text-link px-2 py-3">aistudiocom</td>
                  <td className="text-link px-2 py-3 opacity-0">aistudiointro</td>
                  <td className="px-2 py-3">description</td>
                  <td className="px-2 py-3">EastUS</td>
                  <td className="px-2 py-3">June 11, 2023</td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="text-link px-2 py-3">Name-of-a-model:1</td>
                  <td className="text-link px-2 py-3">aistudiocom</td>
                  <td className="text-link px-2 py-3 opacity-0">aistudiointro</td>
                  <td className="px-2 py-3">description</td>
                  <td className="px-2 py-3">EastUS</td>
                  <td className="px-2 py-3">June 11, 2023</td>
                </tr>
                <tr className="border-b border-outline">
                  <td className="text-link px-2 py-3">Name-of-a-model:2</td>
                  <td className="text-link px-2 py-3">aistudiotest</td>
                  <td className="text-link px-2 py-3 opacity-0">aistudio-2</td>
                  <td className="px-2 py-3">description</td>
                  <td className="px-2 py-3">EastUS</td>
                  <td className="px-2 py-3">June 11, 2023</td>
                </tr>
                <tr>
                  <td className="text-link px-2 py-3">name-of-an-AOAI-app</td>
                  <td className="text-link px-2 py-3">aistudiotest</td>
                  <td className="text-link px-2 py-3 opacity-0">aistudio-3</td>
                  <td className="px-2 py-3">description</td>
                  <td className="px-2 py-3">EastUS</td>
                  <td className="px-2 py-3">June 11, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Work outside of a project */}
        <div className="w-full max-w-[1040px]">
          <h2 className="text-xl font-semibold text-heading mb-4">Work outside of a project</h2>
          <div className="flex flex-row gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl shadow flex-1 flex flex-row items-center overflow-hidden relative" style={{backgroundImage:'linear-gradient(157.858deg, rgba(50, 134, 238, 0.15) 0%, rgba(200, 174, 196, 0.15) 74.364%)'}}>
              <div className="flex-1 p-8">
                <h3 className="text-lg font-semibold text-heading mb-2">Focused on Azure OpenAI Service?</h3>
                <p className="text-body mb-4">Build specifically with Azure OpenAI models and features.</p>
                <button className="btn type-outline font-semibold">Let’s go</button>
              </div>
              <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-full">
                <img src={img19} alt="Chat playground" className="object-contain h-full w-full" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-card rounded-2xl shadow flex-1 flex flex-row items-center overflow-hidden relative">
              <div className="flex-1 p-8">
                <h3 className="text-lg font-semibold text-heading mb-2">Explore Azure AI Services</h3>
                <p className="text-body mb-4">Discover the latest in Speech, Language, Vision, and more.</p>
                <button className="btn type-outline font-semibold">Try now</button>
              </div>
              <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-full">
                <img src={img20} alt="AI Services" className="object-contain h-full w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* Find it fast */}
        <div className="w-full max-w-[1040px]">
          <h2 className="text-xl font-semibold text-heading mb-4">Find it fast</h2>
          <div className="flex flex-row gap-4">
            {/* Card 1 */}
            <div className="bg-neutral-100 rounded-xl flex-1 p-4 flex flex-col items-start">
              <img src={img21} alt="Code Block" className="w-8 h-8 mb-2" />
              <h4 className="text-base font-semibold text-heading mb-1">Build apps with templates</h4>
              <p className="text-body">Start your proof of concept project and deploy to production with templates for app development.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-neutral-100 rounded-xl flex-1 p-4 flex flex-col items-start">
              <img src={img22} alt="Model catalog" className="w-8 h-8 mb-2" />
              <h4 className="text-base font-semibold text-heading mb-1">Model catalog and benchmarks</h4>
              <p className="text-body">Explore the latest models and see how select models compare to each other.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-neutral-100 rounded-xl flex-1 p-4 flex flex-col items-start">
              <img src={img23} alt="Safety and security" className="w-8 h-8 mb-2" />
              <h4 className="text-base font-semibold text-heading mb-1">Safety and security</h4>
              <p className="text-body">Learn the end-to-end process of incorporating safety and security into your AI solution.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-neutral-100 rounded-xl flex-1 p-4 flex flex-col items-start">
              <img src={img24} alt="Multimodal intelligence" className="w-8 h-8 mb-2" />
              <h4 className="text-base font-semibold text-heading mb-1">Multimodal intelligence</h4>
              <p className="text-body">Explore how you can transform content of any modality into task specific structured data</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);