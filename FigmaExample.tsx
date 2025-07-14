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

interface AzureAiLogoProps {
  style?: "Color" | "Dark mode" | "Light mode";
  size?:
    | "16"
    | "20"
    | "24"
    | "32"
    | "36"
    | "40"
    | "48"
    | "54"
    | "60"
    | "64"
    | "96";
  svgExport?: "True";
}

function AzureAiLogo({
  style = "Color",
  size = "96",
  svgExport = "True",
}: AzureAiLogoProps) {
  if (style === "Color" && size === "16" && svgExport === "True") {
    return (
      <div
        className="relative size-full"
        data-name="Style=Color, Size=16, SVG export=True"
        id="node-18_25211"
      >
        <div
          className="absolute left-0 size-[16.004px] top-0"
          data-name="BoundingBox"
          id="node-18_25212"
        />
        <div
          className="absolute h-[14.99px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.927px]"
          data-name="Icon"
          id="node-18_25213"
          style={{ top: "calc(50% + 0.00494432px)" }}
        >
          <img alt className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    );
  }
}

interface ButtonProps {
  text?: string;
  filledIconLarge?: React.ReactNode | null;
  regularIconLarge?: React.ReactNode | null;
  filledIconSm?: React.ReactNode | null;
  regularIconSm?: React.ReactNode | null;
  layout?: "Text only" | "Icon before" | "Icon only";
  style?:
    | "Primary"
    | "Secondary (Default)"
    | "Outline"
    | "Subtle"
    | "Transparent";
  size?: "Large" | "Medium" | "Small";
  state?:
    | "Rest"
    | "Hover"
    | "Pressed"
    | "Selected (Toggle on)"
    | "Focused"
    | "Disabled";
}

function Button({
  text = "Text",
  filledIconLarge = null,
  regularIconLarge = null,
  filledIconSm = null,
  regularIconSm = null,
  layout = "Text only",
  style = "Primary",
  size = "Medium",
  state = "Rest",
}: ButtonProps) {
  if (
    layout === "Icon only" &&
    style === "Subtle" &&
    size === "Medium" &&
    state === "Rest"
  ) {
    return (
      <div
        className="bg-[rgba(255,255,255,0)] relative rounded size-full"
        data-name="Layout=Icon only, Style=Subtle, Size=Medium, State=Rest"
        id="node-18_25714"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[6px] relative size-full">
            {regularIconSm || (
              <div
                className="relative shrink-0 size-5"
                data-name="Icon"
                id="node-18_25715"
              >
                <div
                  className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
                  data-name="Shape"
                  id="node-I18_25715-5980_16"
                >
                  <img alt className="block max-w-none size-full" src={img} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

interface MegaphoneProps {
  size?: "16" | "20" | "24" | "28";
  theme?: "Regular" | "Filled";
}

function Megaphone({ size = "28", theme = "Regular" }: MegaphoneProps) {
  if (size === "20" && theme === "Regular") {
    return (
      <div
        className="relative size-full"
        data-name="Size=20, Theme=Regular"
        id="node-18_26384"
      >
        <div
          className="absolute h-[13.699px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-4"
          data-name="Shape"
          id="node-18_26385"
          style={{ top: "calc(50% + 0.15039px)" }}
        >
          <img alt className="block max-w-none size-full" src={imgShape} />
        </div>
      </div>
    );
  }
}

interface SettingsProps {
  size?: "16" | "20" | "24" | "28" | "32" | "48";
  theme?: "Regular" | "Filled" | "Light";
}

function Settings({ size = "28", theme = "Regular" }: SettingsProps) {
  if (size === "20" && theme === "Regular") {
    return (
      <div
        className="relative size-full"
        data-name="Size=20, Theme=Regular"
        id="node-18_26401"
      >
        <div
          className="absolute h-[17px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16.227px]"
          data-name="Shape"
          id="node-18_26402"
        >
          <img alt className="block max-w-none size-full" src={imgShape1} />
        </div>
      </div>
    );
  }
}

interface EmojiProps {
  size?: "16" | "20" | "24" | "28" | "32" | "48";
  theme?: "Regular" | "Filled" | "Light";
}

function Emoji({ size = "24", theme = "Regular" }: EmojiProps) {
  if (size === "20" && theme === "Regular") {
    return (
      <div
        className="relative size-full"
        data-name="Size=20, Theme=Regular"
        id="node-18_26424"
      >
        <div
          className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          data-name="Shape"
          id="node-18_26425"
        >
          <img alt className="block max-w-none size-full" src={imgShape2} />
        </div>
      </div>
    );
  }
}

interface AvatarProps {
  activityRing?: boolean;
  presence?: boolean;
  text?: string;
  layout?: "Image" | "Icon" | "Initials";
  size?:
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "48"
    | "56"
    | "64"
    | "72"
    | "96"
    | "120";
  color?: "Neutral" | "Brand" | "Colored";
}

function Avatar({
  activityRing = false,
  presence = false,
  text = "MB",
  layout = "Icon",
  size = "120",
  color = "Neutral",
}: AvatarProps) {
  if (layout === "Image" && size === "24" && color === "Neutral") {
    return (
      <div
        className="relative size-full"
        data-name="Layout=Image, Size=24, Color=Neutral"
        id="node-18_27362"
      >
        <div
          className="absolute left-0 size-6 top-0"
          data-name="Subtract"
          id="node-18_27363"
        >
          <img
            alt
            className="block max-w-none size-full"
            height="24"
            src={imgSubtract}
            width="24"
          />
        </div>
      </div>
    );
  }
}

export default function AifOverview() {
  return (
    <div
      className="bg-neutral-50 box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-xl size-full"
      data-name="AIF_Overview"
      id="node-18_47704"
      style={{
        backgroundImage:
          "linear-gradient(114.554deg, rgba(225, 237, 252, 0.2) 0%, rgba(159, 194, 238, 0.2) 99.792%), none",
      }}
    >
      <div
        className="h-11 relative shrink-0 w-full"
        data-name="banner"
        id="node-18_47705"
      >
        <div className="flex flex-row items-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row-reverse h-11 items-center justify-between px-3 py-2 relative w-full">
            <div
              className="box-border content-stretch flex flex-row items-center justify-start order-2 p-0 relative shrink-0"
              data-name=".banner-start"
              id="node-I18_47705-18767_6154"
            >
              <div
                className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative shrink-0"
                data-name="Logo"
                id="node-I18_47705-18767_6155"
              >
                <div
                  className="relative shrink-0 size-[16.004px]"
                  data-name="Azure AI Logo"
                  id="node-I18_47705-18767_6156"
                >
                  <AzureAiLogo size="16" />
                </div>
              </div>
              <div
                className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[12px] text-left text-nowrap"
                id="node-I18_47705-18767_6157"
              >
                <p className="block leading-[16px] whitespace-pre">
                  Azure AI Foundry
                </p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row items-center justify-end order-1 p-0 relative shrink-0"
              data-name=".banner-end"
              id="node-I18_47705-18767_6166"
            >
              <div
                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
                data-name=".Breadcrumb Item"
                id="node-I18_47705-25605_3210"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-0.5 relative rounded shrink-0"
                  data-name="Button"
                  id="node-I18_47705-25605_3210-133494_14910"
                >
                  <div
                    className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                    data-name="Container"
                    id="node-I18_47705-25605_3210-133494_14910-160313_4548"
                  >
                    <div
                      className="box-border content-stretch flex flex-row h-5 items-start justify-start pb-[3px] pt-px px-0 relative shrink-0"
                      data-name="Text wrapper for offset"
                      id="node-I18_47705-25605_3210-133494_14910-160313_4549"
                    >
                      <div
                        className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#424242] text-[12px] text-left text-nowrap"
                        id="node-I18_47705-25605_3210-133494_14910-160313_4550"
                      >
                        <p className="block leading-[16px] whitespace-pre">
                          All projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[6px] relative rounded shrink-0"
                data-name="Button"
                id="node-I18_47705-19648_32967"
              >
                <Button
                  text="All Azure AI"
                  regularIconSm={<Megaphone />}
                  layout="Icon only"
                  style="Subtle"
                />
              </div>
              <div
                className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[6px] relative rounded shrink-0"
                data-name="Button"
                id="node-I18_47705-18767_6172"
              >
                <Button
                  text="All Azure AI"
                  regularIconSm={<Settings />}
                  layout="Icon only"
                  style="Subtle"
                />
              </div>
              <div
                className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[6px] relative rounded shrink-0"
                data-name="Button"
                id="node-I18_47705-18767_6171"
              >
                <Button
                  text="All Azure AI"
                  regularIconSm={<Emoji />}
                  layout="Icon only"
                  style="Subtle"
                />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div
                  className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start px-2 py-0 relative shrink-0"
                  data-name="Authentication"
                  id="node-I18_47705-18767_6182"
                >
                  <div
                    className="font-['Segoe_UI:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#424242] text-[0px] text-[10px] text-nowrap text-right whitespace-pre"
                    id="node-I18_47705-19648_33051"
                  >
                    <p className="block font-['Segoe_UI:Semibold',_sans-serif] mb-0">
                      Contoso-hub
                    </p>
                    <p className="block">EastUS</p>
                  </div>
                  <div
                    className="relative shrink-0 size-6"
                    data-name="Avatar"
                    id="node-I18_47705-18767_6183"
                  >
                    <Avatar layout="Image" size="24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-row h-[956px] items-start justify-start p-0 relative shrink-0 w-full"
        data-name=".pagebase"
        id="node-18_47706"
      >
        <div
          className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
          data-name=".body-frame"
          id="node-18_47707"
        >
          <div
            className="bg-neutral-50 box-border content-stretch flex flex-col h-[956px] items-start justify-start overflow-clip p-0 relative rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-full"
            data-name=".body"
            id="node-18_47708"
          >
            <div
              className="relative shrink-0 w-full"
              data-name="header"
              id="node-18_47709"
            >
              <div className="absolute border-0 border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-between p-[24px] relative w-full">
                  <div
                    className="box-border content-stretch flex flex-row items-center justify-between px-2.5 py-0 relative shrink-0 w-[1060px]"
                    data-name=".base"
                    id="node-I18_47709-2291_8023"
                  >
                    <div className="flex flex-row items-center self-stretch">
                      <div
                        className="box-border content-stretch flex flex-col gap-1.5 h-full items-start justify-start p-0 relative shrink-0"
                        data-name="Title"
                        id="node-I18_47709-2291_8026"
                      >
                        <div
                          className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
                          data-name="Title"
                          id="node-I18_47709-2291_8027"
                        >
                          <div
                            className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0"
                            data-name="Title"
                            id="node-I18_47709-3218_28460"
                          >
                            <div
                              className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
                              data-name="Combo"
                              id="node-I18_47709-3218_28463"
                            >
                              <div
                                className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[24px] text-left text-nowrap"
                                id="node-I18_47709-3218_28465"
                              >
                                <p className="block leading-[32px] whitespace-pre">
                                  Jump into a project in Azure AI Studio
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0"
                      data-name=".End-content"
                      id="node-I18_47709-2290_3591"
                    >
                      <div
                        className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative rounded shrink-0"
                        data-name="Button"
                        id="node-I18_47709-2291_6563"
                      >
                        <div
                          className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                          data-name="Container"
                          id="node-I18_47709-2291_6563-160313_4513"
                        >
                          <div
                            className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                            data-name="Text wrapper for offset"
                            id="node-I18_47709-2291_6563-160313_4514"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f6cbd] text-[14px] text-left text-nowrap"
                              id="node-I18_47709-2291_6563-160313_4515"
                            >
                              <p className="block leading-[20px] whitespace-pre">
                                View all projects
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[#0f6cbd] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative rounded shrink-0"
                        data-name="Button"
                        id="node-I18_47709-2290_3597"
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-5"
                          data-name="Size=20, Theme=Regular"
                          id="node-I18_47709-2290_3597-160313_4498"
                        >
                          <div
                            className="absolute size-[15px] translate-x-[-50%] translate-y-[-50%]"
                            data-name="Shape"
                            id="node-I18_47709-2290_3597-160313_4498-138059_20"
                            style={{
                              top: "calc(50% - 0.5px)",
                              left: "calc(50% - 0.5px)",
                            }}
                          >
                            <img
                              alt
                              className="block max-w-none size-full"
                              src={img1}
                            />
                          </div>
                        </div>
                        <div
                          className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                          data-name="Container"
                          id="node-I18_47709-2290_3597-160313_4499"
                        >
                          <div
                            className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                            data-name="Text wrapper for offset"
                            id="node-I18_47709-2290_3597-160313_4500"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
                              id="node-I18_47709-2290_3597-160313_4501"
                            >
                              <p className="block leading-[20px] whitespace-pre">
                                Create project
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative rounded shrink-0"
                        data-name="Button"
                        id="node-I18_47709-2290_3596"
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-5"
                          data-name="Size=20, Theme=Regular"
                          id="node-I18_47709-2290_3596-160313_4512"
                        >
                          <div
                            className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
                            data-name="Shape"
                            id="node-I18_47709-2290_3596-160313_4512-5409_1575"
                          >
                            <img
                              alt
                              className="block max-w-none size-full"
                              src={img2}
                            />
                          </div>
                        </div>
                        <div
                          className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                          data-name="Container"
                          id="node-I18_47709-2290_3596-160313_4513"
                        >
                          <div
                            className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                            data-name="Text wrapper for offset"
                            id="node-I18_47709-2290_3596-160313_4514"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#424242] text-[14px] text-left text-nowrap"
                              id="node-I18_47709-2290_3596-160313_4515"
                            >
                              <p className="block leading-[20px] whitespace-pre">
                                Help
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-name="body"
              id="node-18_47710"
            >
              <div className="flex flex-col items-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start pb-12 pt-0 px-2.5 relative w-full">
                  <div
                    className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
                    data-name="Section 1"
                    id="node-18_47711"
                  >
                    <div
                      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[261px] items-start justify-start overflow-clip p-0 relative rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0 w-[1040px]"
                      data-name="Table"
                      id="node-18_47712"
                    >
                      <div
                        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
                        data-name="members"
                        id="node-18_47713"
                      >
                        <div
                          className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
                          data-name="List/Column headers"
                          id="node-18_47714"
                        >
                          <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div
                            className="h-[33px] overflow-clip relative shrink-0 w-10"
                            data-name="Column header cell"
                            id="node-18_47715"
                          >
                            <div
                              className="absolute h-8 left-0 translate-y-[-50%] w-[250px]"
                              data-name="content"
                              id="node-18_47716"
                              style={{ top: "calc(50% - 0.5px)" }}
                            />
                          </div>
                          <div
                            className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start overflow-clip pb-[9px] pt-2 px-2 relative shrink-0 w-[200px]"
                            data-name="content"
                            id="node-18_47717"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                              id="node-18_47718"
                            >
                              <p className="block leading-[20px] whitespace-pre">
                                Project name
                              </p>
                            </div>
                            <div
                              className="h-[15px] overflow-clip relative shrink-0 w-4"
                              data-name="Arrow Sort Down"
                              id="node-18_47719"
                            >
                              <div
                                className="absolute flex h-3 items-center justify-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[7px]"
                                style={{ left: "calc(50% - 0.5px)" }}
                              >
                                <div className="flex-none scale-y-[-100%]">
                                  <div
                                    className="h-3 relative w-[7px]"
                                    data-name="Shape"
                                    id="node-I18_47719-116090_975"
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      src={img3}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start overflow-clip pb-[9px] pt-2 px-2 relative shrink-0 w-[120px]"
                            data-name="content"
                            id="node-18_47720"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                              id="node-18_47721"
                            >
                              <p className="block leading-[20px] whitespace-pre">
                                AI hub
                              </p>
                            </div>
                          </div>
                          <div
                            className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start opacity-0 overflow-clip pb-[9px] pt-2 px-2 relative shrink-0 w-[120px]"
                            data-name="content"
                            id="node-18_47722"
                          >
                            <div
                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                              id="node-18_47723"
                            >
                              <p className="block leading-[20px] whitespace-pre">{`Project `}</p>
                            </div>
                            <div
                              className="h-[15px] overflow-clip relative shrink-0 w-4"
                              data-name="Arrow Sort Down"
                              id="node-18_47724"
                            >
                              <div
                                className="absolute flex h-3 items-center justify-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[7px]"
                                style={{ left: "calc(50% - 0.5px)" }}
                              >
                                <div className="flex-none scale-y-[-100%]">
                                  <div
                                    className="h-3 relative w-[7px]"
                                    data-name="Shape"
                                    id="node-I18_47724-116090_975"
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      src={img3}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="basis-0 grow h-[33px] min-h-px min-w-px overflow-clip relative shrink-0"
                            data-name="Column header cell"
                            id="node-18_47725"
                          >
                            <div
                              className="absolute box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start left-0 overflow-clip pb-[9px] pt-2 px-2 translate-y-[-50%]"
                              data-name="content"
                              id="node-18_47726"
                              style={{ top: "calc(50% - 0.5px)" }}
                            >
                              <div
                                className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                id="node-18_47727"
                              >
                                <p className="block leading-[20px] whitespace-pre">
                                  Description
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="basis-0 grow h-[33px] min-h-px min-w-px overflow-clip relative shrink-0"
                            data-name="Column header cell"
                            id="node-18_47728"
                          >
                            <div
                              className="absolute box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start left-0 overflow-clip pb-[9px] pt-2 px-2 translate-y-[-50%]"
                              data-name="content"
                              id="node-18_47729"
                              style={{ top: "calc(50% - 0.5px)" }}
                            >
                              <div
                                className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                id="node-18_47730"
                              >
                                <p className="block leading-[20px] whitespace-pre">
                                  Region
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="basis-0 grow h-[33px] min-h-px min-w-px overflow-clip relative shrink-0"
                            data-name="Column header cell"
                            id="node-18_47731"
                          >
                            <div
                              className="absolute box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start left-0 overflow-clip pb-[9px] pt-2 px-2 translate-y-[-50%]"
                              data-name="content"
                              id="node-18_47732"
                              style={{ top: "calc(50% - 0.5px)" }}
                            >
                              <div
                                className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                id="node-18_47733"
                              >
                                <p className="block leading-[20px] whitespace-pre">
                                  Created on
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffffff] relative shrink-0 w-full"
                          data-name="ComputeInstanceListItem"
                          id="node-18_47734"
                        >
                          <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-start pl-10 pr-0 py-0 relative w-full">
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[200px]"
                                data-name="content"
                                id="node-18_47735"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47736"
                                >
                                  <p className="block leading-[20px]">
                                    Contoso-project
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47737"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47738"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiocom
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start opacity-0 overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47739"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47740"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiointro
                                  </p>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0"
                                data-name="Owner"
                                id="node-18_47741"
                              >
                                <div
                                  className="absolute inset-0 overflow-clip"
                                  data-name="List/Cells"
                                  id="node-I18_47741-306_164063"
                                >
                                  <div
                                    className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 right-0"
                                    data-name="border"
                                    id="node-I18_47741-306_164063-38_1147"
                                  />
                                  <div
                                    className="absolute box-border content-stretch flex flex-row h-11 items-center justify-start left-0 overflow-clip pb-[13px] pt-[11px] px-2 right-4 translate-y-[-50%]"
                                    data-name="content"
                                    id="node-I18_47741-306_164063-38_1148"
                                    style={{ top: "calc(50% - 0.5px)" }}
                                  >
                                    <div
                                      className="basis-0 flex flex-col font-['Segoe_UI:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[14px] text-left"
                                      id="node-I18_47741-306_164063-38_1149"
                                    >
                                      <p className="block leading-[20px]">
                                        description
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-11 items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[11px] relative shrink-0"
                                data-name="content"
                                id="node-18_47742"
                              >
                                <div
                                  className="box-border content-stretch flex flex-row h-8 items-center justify-start px-1 py-0 relative rounded shrink-0"
                                  data-name="AccordionHeader"
                                  id="node-18_47743"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
                                    id="node-18_47744"
                                  >
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                      id="node-18_47745"
                                    >
                                      <p className="block leading-[20px] whitespace-pre">
                                        EastUS
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-11 min-h-px min-w-px relative shrink-0"
                                data-name="content"
                                id="node-18_47746"
                              >
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-2 py-[11px] relative w-full">
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left w-[184px]"
                                      id="node-18_47747"
                                    >
                                      <p className="block leading-[20px]">
                                        June 11, 2023
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffffff] relative shrink-0 w-full"
                          data-name="ComputeInstanceListItem"
                          id="node-18_47748"
                        >
                          <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-start pl-10 pr-0 py-0 relative w-full">
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[200px]"
                                data-name="content"
                                id="node-18_47749"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47750"
                                >
                                  <p className="block leading-[20px]">
                                    Name-of-a-model:1
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47751"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47752"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiocom
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start opacity-0 overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47753"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47754"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiointro
                                  </p>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0"
                                data-name="Owner"
                                id="node-18_47755"
                              >
                                <div
                                  className="absolute inset-0 overflow-clip"
                                  data-name="List/Cells"
                                  id="node-I18_47755-306_164063"
                                >
                                  <div
                                    className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 right-0"
                                    data-name="border"
                                    id="node-I18_47755-306_164063-38_1147"
                                  />
                                  <div
                                    className="absolute box-border content-stretch flex flex-row h-11 items-center justify-start left-0 overflow-clip pb-[13px] pt-[11px] px-2 right-4 translate-y-[-50%]"
                                    data-name="content"
                                    id="node-I18_47755-306_164063-38_1148"
                                    style={{ top: "calc(50% - 0.5px)" }}
                                  >
                                    <div
                                      className="basis-0 flex flex-col font-['Segoe_UI:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[14px] text-left"
                                      id="node-I18_47755-306_164063-38_1149"
                                    >
                                      <p className="block leading-[20px]">
                                        description
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-11 items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[11px] relative shrink-0"
                                data-name="content"
                                id="node-18_47756"
                              >
                                <div
                                  className="box-border content-stretch flex flex-row h-8 items-center justify-start px-1 py-0 relative rounded shrink-0"
                                  data-name="AccordionHeader"
                                  id="node-18_47757"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
                                    id="node-18_47758"
                                  >
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                      id="node-18_47759"
                                    >
                                      <p className="block leading-[20px] whitespace-pre">
                                        EastUS
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-11 min-h-px min-w-px relative shrink-0"
                                data-name="content"
                                id="node-18_47760"
                              >
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-2 py-[11px] relative w-full">
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left w-[184px]"
                                      id="node-18_47761"
                                    >
                                      <p className="block leading-[20px]">
                                        June 11, 2023
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffffff] relative shrink-0 w-full"
                          data-name="ComputeInstanceListItem"
                          id="node-18_47762"
                        >
                          <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-start pl-10 pr-0 py-0 relative w-full">
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[200px]"
                                data-name="content"
                                id="node-18_47763"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47764"
                                >
                                  <p className="block leading-[20px]">
                                    Name-of-a-model:2
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47765"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47766"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiotest
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start opacity-0 overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47767"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47768"
                                >
                                  <p className="block leading-[20px]">
                                    aistudio-2
                                  </p>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0"
                                data-name="Owner"
                                id="node-18_47769"
                              >
                                <div
                                  className="absolute inset-0 overflow-clip"
                                  data-name="List/Cells"
                                  id="node-I18_47769-306_164063"
                                >
                                  <div
                                    className="absolute bg-[#e0e0e0] bottom-0 h-px left-0 right-0"
                                    data-name="border"
                                    id="node-I18_47769-306_164063-38_1147"
                                  />
                                  <div
                                    className="absolute box-border content-stretch flex flex-row h-11 items-center justify-start left-0 overflow-clip pb-[13px] pt-[11px] px-2 right-4 translate-y-[-50%]"
                                    data-name="content"
                                    id="node-I18_47769-306_164063-38_1148"
                                    style={{ top: "calc(50% - 0.5px)" }}
                                  >
                                    <div
                                      className="basis-0 flex flex-col font-['Segoe_UI:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[14px] text-left"
                                      id="node-I18_47769-306_164063-38_1149"
                                    >
                                      <p className="block leading-[20px]">
                                        description
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-11 items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[11px] relative shrink-0"
                                data-name="content"
                                id="node-18_47770"
                              >
                                <div
                                  className="box-border content-stretch flex flex-row h-8 items-center justify-start px-1 py-0 relative rounded shrink-0"
                                  data-name="AccordionHeader"
                                  id="node-18_47771"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
                                    id="node-18_47772"
                                  >
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                      id="node-18_47773"
                                    >
                                      <p className="block leading-[20px] whitespace-pre">
                                        EastUS
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-11 min-h-px min-w-px relative shrink-0"
                                data-name="content"
                                id="node-18_47774"
                              >
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-2 py-[11px] relative w-full">
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left w-[184px]"
                                      id="node-18_47775"
                                    >
                                      <p className="block leading-[20px]">
                                        June 11, 2023
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffffff] relative shrink-0 w-full"
                          data-name="ComputeInstanceListItem"
                          id="node-18_47776"
                        >
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-start pl-10 pr-0 py-0 relative w-full">
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[200px]"
                                data-name="content"
                                id="node-18_47777"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47778"
                                >
                                  <p className="block leading-[20px]">
                                    name-of-an-AOAI-app
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47779"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47780"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiotest
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start opacity-0 overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47781"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47782"
                                >
                                  <p className="block leading-[20px]">
                                    aistudio-3
                                  </p>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0"
                                data-name="Owner"
                                id="node-18_47783"
                              >
                                <div
                                  className="absolute inset-0 overflow-clip"
                                  data-name="List/Cells"
                                  id="node-I18_47783-306_164063"
                                >
                                  <div
                                    className="absolute box-border content-stretch flex flex-row h-11 items-center justify-start left-0 overflow-clip pb-[13px] pt-[11px] px-2 right-4 translate-y-[-50%]"
                                    data-name="content"
                                    id="node-I18_47783-306_164063-38_1148"
                                    style={{ top: "calc(50% - 0.5px)" }}
                                  >
                                    <div
                                      className="basis-0 flex flex-col font-['Segoe_UI:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[14px] text-left"
                                      id="node-I18_47783-306_164063-38_1149"
                                    >
                                      <p className="block leading-[20px]">
                                        description
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-11 items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[11px] relative shrink-0"
                                data-name="content"
                                id="node-18_47784"
                              >
                                <div
                                  className="box-border content-stretch flex flex-row h-8 items-center justify-start px-1 py-0 relative rounded shrink-0"
                                  data-name="AccordionHeader"
                                  id="node-18_47785"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
                                    id="node-18_47786"
                                  >
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                      id="node-18_47787"
                                    >
                                      <p className="block leading-[20px] whitespace-pre">
                                        EastUS
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-11 min-h-px min-w-px relative shrink-0"
                                data-name="content"
                                id="node-18_47788"
                              >
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-2 py-[11px] relative w-full">
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left w-[184px]"
                                      id="node-18_47789"
                                    >
                                      <p className="block leading-[20px]">
                                        June 11, 2023
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffffff] relative shrink-0 w-full"
                          data-name="ComputeInstanceListItem"
                          id="node-18_47790"
                        >
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-start pl-10 pr-0 py-0 relative w-full">
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[200px]"
                                data-name="content"
                                id="node-18_47791"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47792"
                                >
                                  <p className="block leading-[20px]">
                                    name-of-an-AOAI-app
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47793"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47794"
                                >
                                  <p className="block leading-[20px]">
                                    aistudiotest
                                  </p>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start opacity-0 overflow-clip px-2 py-[11px] relative shrink-0 w-[120px]"
                                data-name="content"
                                id="node-18_47795"
                              >
                                <div
                                  className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-left w-[184px]"
                                  id="node-18_47796"
                                >
                                  <p className="block leading-[20px]">
                                    aistudio-3
                                  </p>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-[45px] min-h-px min-w-px relative shrink-0"
                                data-name="Owner"
                                id="node-18_47797"
                              >
                                <div
                                  className="absolute inset-0 overflow-clip"
                                  data-name="List/Cells"
                                  id="node-I18_47797-306_164063"
                                >
                                  <div
                                    className="absolute box-border content-stretch flex flex-row h-11 items-center justify-start left-0 overflow-clip pb-[13px] pt-[11px] px-2 right-4 translate-y-[-50%]"
                                    data-name="content"
                                    id="node-I18_47797-306_164063-38_1148"
                                    style={{ top: "calc(50% - 0.5px)" }}
                                  >
                                    <div
                                      className="basis-0 flex flex-col font-['Segoe_UI:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[14px] text-left"
                                      id="node-I18_47797-306_164063-38_1149"
                                    >
                                      <p className="block leading-[20px]">
                                        description
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-11 items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[11px] relative shrink-0"
                                data-name="content"
                                id="node-18_47798"
                              >
                                <div
                                  className="box-border content-stretch flex flex-row h-8 items-center justify-start px-1 py-0 relative rounded shrink-0"
                                  data-name="AccordionHeader"
                                  id="node-18_47799"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0"
                                    id="node-18_47800"
                                  >
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                      id="node-18_47801"
                                    >
                                      <p className="block leading-[20px] whitespace-pre">
                                        EastUS
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="basis-0 grow h-11 min-h-px min-w-px relative shrink-0"
                                data-name="content"
                                id="node-18_47802"
                              >
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-4 h-11 items-center justify-start px-2 py-[11px] relative w-full">
                                    <div
                                      className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left w-[184px]"
                                      id="node-18_47803"
                                    >
                                      <p className="block leading-[20px]">
                                        June 11, 2023
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center max-w-[1045px] min-h-px min-w-[374px] p-0 rounded-lg shrink-0 w-full"
                        data-name="content box"
                        id="node-18_47804"
                      />
                    </div>
                    <div
                      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
                      data-name="Section / Title"
                      id="node-18_47805"
                    >
                      <div
                        className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[20px] text-left text-nowrap"
                        id="node-18_47806"
                      >
                        <p className="block leading-[28px] whitespace-pre">
                          Work outside of a project
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[1040px]"
                      data-name="Cards"
                      id="node-18_47807"
                    >
                      <div
                        className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row grow h-[198px] items-start justify-start min-h-px min-w-px overflow-clip p-0 relative rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0"
                        data-name="Large card"
                        id="node-18_47808"
                        style={{
                          backgroundImage:
                            "linear-gradient(157.858deg, rgba(50, 134, 238, 0.15) 0%, rgba(200, 174, 196, 0.15) 74.364%), none",
                        }}
                      >
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none h-[184px] rotate-[180deg] scale-y-[-100%] w-[768px]">
                            <div
                              className="opacity-25 size-full"
                              data-name="Texture"
                              id="node-I18_47808-26671_5736"
                              style={{
                                backgroundImage:
                                  "linear-gradient(195.461deg, rgb(255, 255, 255) 0%, rgb(228, 228, 228) 100%)",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="basis-0 grow min-h-px min-w-px relative shrink-0"
                          data-name="Content"
                          id="node-I18_47808-26671_5737"
                        >
                          <div className="flex flex-col justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-8 pr-6 py-7 relative w-full">
                              <div
                                className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[20px] text-left w-full"
                                id="node-I18_47808-26671_5738"
                              >
                                <p className="block leading-[28px]">
                                  Focused on Azure OpenAI Service?
                                </p>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-4 h-[88px] items-start justify-start p-0 relative shrink-0 w-full"
                                data-name="body"
                                id="node-I18_47808-26671_5739"
                              >
                                <div
                                  className="-webkit-box basis-0 css-d3yevt font-['Segoe_UI:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-left w-full"
                                  id="node-I18_47808-26671_5740"
                                >
                                  <p className="block leading-[20px]">
                                    Build specifically with Azure OpenAI models
                                    and features.
                                  </p>
                                </div>
                                <div
                                  className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative rounded shrink-0"
                                  data-name="Button"
                                  id="node-I18_47808-26671_5745"
                                >
                                  <div className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded" />
                                  <div
                                    className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                                    data-name="Container"
                                    id="node-I18_47808-26671_5745-160313_4506"
                                  >
                                    <div
                                      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                                      data-name="Text wrapper for offset"
                                      id="node-I18_47808-26671_5745-160313_4507"
                                    >
                                      <div
                                        className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                        id="node-I18_47808-26671_5745-160313_4508"
                                      >
                                        <p className="block leading-[20px] whitespace-pre">
                                          Let’s go
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
                          data-name="right"
                          id="node-I18_47808-26671_5746"
                        >
                          <div
                            className="absolute bottom-[-104px] left-4 right-[-383px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_0px_2px_0px_rgba(0,0,0,0.08)] top-6"
                            data-name=".image"
                            id="node-I18_47808-26671_5747"
                          >
                            <div
                              className="absolute backdrop-blur-[16.8146px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[479.922px] left-0 rounded-[14.3797px] top-0 w-[717.188px]"
                              data-name="BG frame"
                              id="node-I18_47808-26671_5747-260_13405"
                            >
                              <div className="absolute border-[#ffffff] border-[1.79746px] border-solid inset-0 pointer-events-none rounded-[14.3797px]" />
                            </div>
                            <div
                              className="absolute font-['Segoe_UI:Semibold',_sans-serif] leading-[0] left-[20.76px] not-italic text-[#242424] text-[13.5px] text-left text-nowrap top-[12.405px]"
                              id="node-I18_47808-26671_5747-260_13406"
                            >
                              <p className="block leading-[18px] whitespace-pre">
                                Chat playground
                              </p>
                            </div>
                            <div
                              className="absolute box-border content-stretch flex flex-row gap-[116.903px] items-center justify-start left-[161.094px] p-0 rounded-[5.50131px] top-[11.403px]"
                              data-name="Toolbar"
                              id="node-I18_47808-26671_5747-260_13407"
                            >
                              <div
                                className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0"
                                data-name=".End-content"
                                id="node-I18_47808-26671_5747-260_13409"
                              >
                                <div className="flex h-[22px] items-center justify-center relative shrink-0 w-[5.5px]">
                                  <div className="flex-none rotate-[270deg]">
                                    <div
                                      className="h-[5.501px] relative w-[22.005px]"
                                      data-name="Divider"
                                      id="node-I18_47808-26671_5747-260_13411"
                                    >
                                      <div className="relative size-full">
                                        <div className="box-border content-stretch flex flex-col h-[5.501px] items-start justify-start pb-[8.252px] pt-[8.94px] px-[4.126px] w-[22.005px]" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center p-[4.12599px] relative rounded-[3.66754px] shrink-0"
                                  data-name="Button"
                                  id="node-I18_47808-26671_5747-260_14495"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-[2.751px] items-center justify-center p-0 relative shrink-0"
                                    data-name="Container"
                                    id="node-I18_47808-26671_5747-260_14496"
                                  >
                                    <div
                                      className="relative shrink-0 size-[13.753px]"
                                      data-name="Share"
                                      id="node-I18_47808-26671_5747-260_14725"
                                    >
                                      <img
                                        alt
                                        className="block max-w-none size-full"
                                        src={img4}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center p-[4.12599px] relative rounded-[3.66754px] shrink-0"
                                  data-name="Button"
                                  id="node-I18_47808-26671_5747-260_14678"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-[2.751px] items-center justify-center p-0 relative shrink-0"
                                    data-name="Container"
                                    id="node-I18_47808-26671_5747-260_14679"
                                  >
                                    <div
                                      className="relative shrink-0 size-[13.753px]"
                                      data-name="History"
                                      id="node-I18_47808-26671_5747-260_14730"
                                    >
                                      <img
                                        alt
                                        className="block max-w-none size-full"
                                        src={img5}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center p-[4.12599px] relative rounded-[3.66754px] shrink-0"
                                  data-name="Button"
                                  id="node-I18_47808-26671_5747-260_14631"
                                >
                                  <div
                                    className="box-border content-stretch flex flex-row gap-[2.751px] items-center justify-center p-0 relative shrink-0"
                                    data-name="Container"
                                    id="node-I18_47808-26671_5747-260_14632"
                                  >
                                    <div
                                      className="relative shrink-0 size-[13.753px]"
                                      data-name="Code"
                                      id="node-I18_47808-26671_5747-260_14735"
                                    >
                                      <img
                                        alt
                                        className="block max-w-none size-full"
                                        src={img6}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="absolute box-border content-stretch flex flex-col h-[190.125px] items-center justify-start left-[15.76px] max-w-[647.651px] overflow-clip p-0 rounded-[8.32992px] top-[41.655px] w-[401.625px]"
                              data-name="Content"
                              id="node-I18_47808-26671_5747-260_13420"
                            >
                              <div
                                className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
                                data-name=".assistant canvas content"
                                id="node-I18_47808-26671_5747-260_13421"
                              >
                                <div className="overflow-clip relative size-full">
                                  <div className="box-border content-stretch flex flex-col gap-[8.33px] items-start justify-start px-[6.247px] py-[4.165px] relative size-full">
                                    <div
                                      className="box-border content-stretch flex flex-col items-start justify-start pl-[56.25px] pr-0 py-0 relative shrink-0 w-[372.47px]"
                                      data-name=".User input"
                                      id="node-I18_47808-26671_5747-260_17188"
                                    >
                                      <div
                                        className="bg-[#ebefff] relative rounded-[4.5px] shrink-0 w-full"
                                        data-name="Prompt"
                                        id="node-I18_47808-26671_5747-260_17189"
                                      >
                                        <div className="relative size-full">
                                          <div className="box-border content-stretch flex flex-row items-start justify-start px-[9px] py-[4.5px] relative w-full">
                                            <div
                                              className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#242424] text-[10.5px] text-left"
                                              id="node-I18_47808-26671_5747-260_17190"
                                            >
                                              <p className="block leading-[normal]">
                                                When did Mona say that planning
                                                starts for the Summit Center
                                                project and what is the timeline
                                                mentioned in the 2023 Project
                                                Planning Document?
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="box-border content-stretch flex flex-col gap-[6.5px] items-start justify-start p-0 relative shrink-0 w-[372.47px]"
                                      data-name="CopilotMessage"
                                      id="node-I18_47808-26671_5747-260_17191"
                                    >
                                      <div
                                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
                                        data-name="Header"
                                        id="node-I18_47808-26671_5747-260_17192"
                                      >
                                        <div
                                          className="box-border content-stretch flex flex-row gap-2 h-[11.25px] items-center justify-start p-0 relative shrink-0"
                                          data-name="Persona"
                                          id="node-I18_47808-26671_5747-260_17193"
                                        >
                                          <div
                                            className="relative shrink-0 size-[11.25px]"
                                            data-name="Chat"
                                            id="node-I18_47808-26671_5747-260_18090"
                                          >
                                            <img
                                              alt
                                              className="block max-w-none size-full"
                                              src={img7}
                                            />
                                          </div>
                                          <div
                                            className="box-border content-stretch flex flex-col h-full items-start justify-center pb-[1.688px] pt-[0.563px] px-0 relative shrink-0"
                                            data-name="Title"
                                            id="node-I18_47808-26671_5747-260_17195"
                                          >
                                            <div
                                              className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[9.88px] text-left text-nowrap"
                                              id="node-I18_47808-26671_5747-260_17196"
                                            >
                                              <p className="block leading-[11.25px] whitespace-pre">
                                                Chatbot
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                                        data-name="Response"
                                        id="node-I18_47808-26671_5747-260_17198"
                                      >
                                        <div
                                          className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[10.5px] text-left w-full"
                                          id="node-I18_47808-26671_5747-260_17199"
                                        >
                                          <p className="block leading-[normal]">
                                            Mona said that Summit Center project
                                            is set to start pre-construction
                                            planning and site preparation for
                                            the new arena in Atlanta April 2023.
                                            The project is set to go into the
                                            following year.
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="box-border content-stretch flex flex-row gap-1.5 items-start justify-start p-0 relative shrink-0"
                                        data-name="Footnote"
                                        id="node-I18_47808-26671_5747-260_17201"
                                      >
                                        <div
                                          className="box-border content-stretch flex flex-row gap-[2.25px] items-start justify-start p-0 relative rounded-lg shrink-0"
                                          data-name="ReferenceList"
                                          id="node-I18_47808-26671_5747-260_17203"
                                        >
                                          <div
                                            className="bg-neutral-100 box-border content-stretch flex flex-row gap-[1.125px] h-6 items-center justify-start px-[4.5px] py-[1.125px] relative rounded-[2.25px] shrink-0"
                                            data-name="Reference"
                                            id="node-I18_47808-26671_5747-260_17203-111528_255079"
                                          >
                                            <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[2.25px]" />
                                            <div
                                              className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424242] text-[5.63px] text-center text-nowrap"
                                              id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_7870"
                                            >
                                              <p className="block leading-[7.875px] whitespace-pre">
                                                1
                                              </p>
                                            </div>
                                            <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[5.063px]">
                                              <div className="flex-none rotate-[270deg]">
                                                <div
                                                  className="box-border content-stretch flex flex-col items-start justify-start pb-[2.25px] pt-[2.813px] px-0 relative w-4"
                                                  data-name="Divider"
                                                  id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8597"
                                                >
                                                  <div
                                                    className="h-0 relative shrink-0 w-full"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8597-17375_175114"
                                                  >
                                                    <div
                                                      className="absolute bottom-0 left-0 right-0 top-[-0.563px]"
                                                      style={
                                                        {
                                                          "--stroke-0":
                                                            "rgba(224.000001847744, 224.000001847744, 224.000001847744, 1)",
                                                        } as React.CSSProperties
                                                      }
                                                    >
                                                      <img
                                                        alt
                                                        className="block max-w-none size-full"
                                                        loading="lazy"
                                                        src={img8}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="box-border content-stretch flex flex-row gap-[3.375px] items-center justify-start p-0 relative shrink-0"
                                              data-name="Content"
                                              id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_7873"
                                            >
                                              <div
                                                className="box-border content-stretch flex flex-row gap-[5.625px] items-center justify-start p-0 relative shrink-0"
                                                data-name=".Reference graphic"
                                                id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159"
                                              >
                                                <div
                                                  className="relative shrink-0 size-4"
                                                  data-name="docx"
                                                  id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078"
                                                >
                                                  <div
                                                    className="absolute bottom-[6.25%] left-[31.25%] right-[6.25%] top-[6.25%]"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17976"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img9}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-3/4 left-[81.25%] right-[6.25%] top-[10.669%]"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17977"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img10}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-0 left-1/4 right-0 top-0"
                                                    data-name="Shape"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17978"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img11}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-[31.25%] left-[62.5%] right-[12.5%] top-[62.5%]"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17982"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img12}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-[43.75%] left-[62.5%] right-[12.5%] top-1/2"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17983"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img13}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-[56.25%] left-[62.5%] right-[12.5%] top-[37.5%]"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17984"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img14}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-[18.75%] left-0 right-[43.75%] top-1/4"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17986"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img15}
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bottom-[31.313%] left-[12.531%] right-[56.375%] top-[37.5%]"
                                                    data-name="Path"
                                                    id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_8159-111291_8078-1802_17987"
                                                  >
                                                    <img
                                                      alt
                                                      className="block max-w-none size-full"
                                                      loading="lazy"
                                                      src={img16}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424242] text-[6.75px] text-center text-nowrap"
                                                id="node-I18_47808-26671_5747-260_17203-111528_255079-111291_7876"
                                              >
                                                <p className="block leading-[9px] whitespace-pre">
                                                  2024 Project Planning
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="bg-neutral-100 box-border content-stretch flex flex-row gap-[1.125px] h-6 items-center justify-start px-[4.5px] py-[1.125px] relative rounded-[2.25px] shrink-0"
                                            data-name="Show more"
                                            id="node-I18_47808-26671_5747-260_17203-111528_255160"
                                          >
                                            <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[2.25px]" />
                                            <div
                                              className="box-border content-stretch flex flex-row gap-[3.375px] items-center justify-start p-0 relative shrink-0"
                                              data-name="Content"
                                              id="node-I18_47808-26671_5747-260_17203-111528_255160-111291_7873"
                                            >
                                              <div
                                                className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424242] text-[6.75px] text-center text-nowrap"
                                                id="node-I18_47808-26671_5747-260_17203-111528_255160-111291_7876"
                                              >
                                                <p className="block leading-[9px] whitespace-pre">
                                                  +4
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
                                data-name=".assistants-chat-input"
                                id="node-I18_47808-26671_5747-260_18108"
                              >
                                <div
                                  className="bg-[#ffffff] relative rounded-[3.12372px] shrink-0 w-full"
                                  data-name="Textarea"
                                  id="node-I18_47808-26671_5747-260_18109"
                                >
                                  <div className="absolute border-[#d1d1d1] border-[0.52062px] border-solid inset-0 pointer-events-none rounded-[3.12372px]" />
                                  <div className="relative size-full">
                                    <div className="box-border content-stretch flex flex-col gap-[4.165px] items-start justify-start pb-[3.124px] pt-[6.247px] px-[4.165px] relative w-full">
                                      <div
                                        className="relative shrink-0 w-full"
                                        data-name="Input"
                                        id="node-I18_47808-26671_5747-260_18110"
                                      >
                                        <div className="relative size-full">
                                          <div className="box-border content-stretch flex flex-row gap-[6.247px] items-start justify-start px-[4.165px] py-0 relative w-full">
                                            <div
                                              className="basis-0 box-border content-stretch flex flex-row gap-[0.521px] grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
                                              data-name="Text Input"
                                              id="node-I18_47808-26671_5747-260_18111"
                                            >
                                              <div
                                                className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#424242] text-[7.28868px] text-left"
                                                id="node-I18_47808-26671_5747-260_18112"
                                              >
                                                <p className="block leading-[10.4124px]">{`Describe what you'd like to do or use / to reference files, people, and more`}</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
                                        data-name="Footer"
                                        id="node-I18_47808-26671_5747-260_18113"
                                      >
                                        <div
                                          className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
                                          data-name="Buttons"
                                          id="node-I18_47808-26671_5747-260_18115"
                                        >
                                          <div
                                            className="box-border content-stretch flex flex-row gap-[3.124px] items-center justify-start px-[4.165px] py-[2.082px] relative rounded-[2.08248px] shrink-0"
                                            data-name="Count"
                                            id="node-I18_47808-26671_5747-260_18116"
                                          >
                                            <div
                                              className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#424242] text-[5.2062px] text-nowrap text-right"
                                              id="node-I18_47808-26671_5747-260_18117"
                                            >
                                              <p className="block leading-[7.28868px] whitespace-pre">
                                                0/2000
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className="box-border content-stretch flex flex-row h-[16.66px] items-center justify-end p-0 relative shrink-0"
                                            data-name="Input Actions"
                                            id="node-I18_47808-26671_5747-260_18118"
                                          >
                                            <div
                                              className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[3.12372px] relative rounded-[2.08248px] shrink-0"
                                              data-name="Attach"
                                              id="node-I18_47808-26671_5747-260_18120"
                                            >
                                              <div
                                                className="shrink-0 size-0"
                                                data-name="Icon"
                                                id="node-I18_47808-26671_5747-260_18120-68019_169041"
                                              />
                                            </div>
                                            <div className="flex h-[16.656px] items-center justify-center relative shrink-0 w-[4.656px]">
                                              <div className="flex-none rotate-[270deg]">
                                                <div
                                                  className="box-border content-stretch flex flex-col items-start justify-start pb-[2.082px] pt-[2.603px] px-[2.082px] relative w-[16.66px]"
                                                  data-name="Divider"
                                                  id="node-I18_47808-26671_5747-260_18122"
                                                >
                                                  <div
                                                    className="h-0 relative shrink-0 w-full"
                                                    id="node-I18_47808-26671_5747-260_18122-17375_175114"
                                                  >
                                                    <div
                                                      className="absolute bottom-0 left-0 right-0 top-[-0.521px]"
                                                      style={
                                                        {
                                                          "--stroke-0":
                                                            "rgba(224.000001847744, 224.000001847744, 224.000001847744, 1)",
                                                        } as React.CSSProperties
                                                      }
                                                    >
                                                      <img
                                                        alt
                                                        className="block max-w-none size-full"
                                                        loading="lazy"
                                                        src={img17}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[3.12372px] relative rounded-[2.08248px] shrink-0"
                                              data-name="Send"
                                              id="node-I18_47808-26671_5747-260_18124"
                                            >
                                              <div
                                                className="shrink-0 size-0"
                                                data-name="Icon"
                                                id="node-I18_47808-26671_5747-260_18124-68019_169041"
                                              />
                                            </div>
                                            <div
                                              className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[3.12372px] relative rounded-[2.08248px] shrink-0"
                                              data-name="Send"
                                              id="node-I18_47808-26671_5747-260_18125"
                                            >
                                              <div
                                                className="shrink-0 size-0"
                                                data-name="Icon"
                                                id="node-I18_47808-26671_5747-260_18125-68019_169041"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative rounded-2xl self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] shrink-0"
                        data-name="Large card"
                        id="node-18_47809"
                      >
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none h-[198px] rotate-[180deg] scale-y-[-100%] w-[512px]">
                            <div
                              className="opacity-25 size-full"
                              data-name="Texture"
                              id="node-18_47810"
                              style={{
                                backgroundImage:
                                  "linear-gradient(204.058deg, rgb(255, 255, 255) 0%, rgb(228, 228, 228) 100%)",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
                          data-name="Content"
                          id="node-18_47811"
                        >
                          <div className="flex flex-col justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-8 pr-6 py-7 relative size-full">
                              <div
                                className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[20px] text-left w-full"
                                id="node-18_47812"
                              >
                                <p className="block leading-[28px]">
                                  Explore Azure AI Services
                                </p>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                                data-name="body"
                                id="node-18_47813"
                              >
                                <div
                                  className="-webkit-box css-d3yevt font-['Segoe_UI:Regular',_sans-serif] leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-left"
                                  id="node-18_47814"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block leading-[20px]">
                                    Discover the latest in Speech, Language,
                                    Vision, and more.
                                  </p>
                                </div>
                                <div
                                  className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative rounded shrink-0"
                                  data-name="Button"
                                  id="node-18_47815"
                                >
                                  <div className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded" />
                                  <div
                                    className="box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center p-0 relative shrink-0"
                                    data-name="Container"
                                    id="node-I18_47815-160313_4506"
                                  >
                                    <div
                                      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                                      data-name="Text wrapper for offset"
                                      id="node-I18_47815-160313_4507"
                                    >
                                      <div
                                        className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] text-left text-nowrap"
                                        id="node-I18_47815-160313_4508"
                                      >
                                        <p className="block leading-[20px] whitespace-pre">
                                          Try now
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
                          data-name="right"
                          id="node-18_47816"
                        >
                          <div
                            className="absolute bottom-[-61px] size-64 translate-x-[-50%]"
                            data-name="Window-Tools"
                            id="node-18_47817"
                            style={{ left: "calc(50% - 11px)" }}
                          >
                            <div
                              className="absolute contents left-4 top-8"
                              data-name="Developer-Tools_Light"
                              id="node-I18_47817-28547_11380"
                            >
                              <div
                                className="absolute contents left-4 top-8"
                                id="node-I18_47817-28547_11394"
                              >
                                <div
                                  className="absolute h-48 left-4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[224px_224px] rounded-[20px] top-8 w-56"
                                  id="node-I18_47817-28547_11395"
                                  style={{
                                    backgroundImage:
                                      "linear-gradient(203.665deg, rgb(244, 243, 245) 2.9073%, rgb(232, 230, 223) 96.209%)",
                                    maskImage: `url('${img18}')`,
                                  }}
                                >
                                  <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.12),0px_-2px_0px_0px_inset_rgba(0,0,0,0.05),-1px_4px_3px_0px_inset_rgba(255,255,255,0.25),4px_-4px_12px_0px_inset_rgba(0,0,0,0.1),2px_-2px_2px_0px_inset_rgba(0,0,0,0.1)]" />
                                </div>
                                <div
                                  className="absolute h-12 left-4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[224px_224px] top-8 w-56"
                                  id="node-I18_47817-28547_11396"
                                  style={{ maskImage: `url('${img18}')` }}
                                >
                                  <div className="absolute bottom-[-43.333%] left-[-6.429%] right-[-6.429%] top-[-16.667%]">
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      src={img19}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute h-[170px] left-20 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-64px_-54px] mask-size-[224px_224px] top-[86px] w-24"
                                  id="node-I18_47817-28547_11398"
                                  style={{ maskImage: `url('${img18}')` }}
                                >
                                  <div className="absolute bottom-[-12.235%] left-[-15%] right-[-15%] top-[-4.706%]">
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      src={img20}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute contents left-[190px] top-[50px]"
                                  id="node-I18_47817-28547_11407"
                                >
                                  <div
                                    className="absolute bg-[#d9d9d9] h-2.5 left-[190px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-174px_-18px] mask-size-[224px_224px] rounded-[40px] top-[50px] w-[34px]"
                                    id="node-I18_47817-28547_11408"
                                    style={{
                                      backgroundImage:
                                        "linear-gradient(15.8966deg, rgb(192, 59, 196) 9.5192%, rgba(192, 59, 196, 0) 80.578%), linear-gradient(192.354deg, rgb(73, 197, 177) 5.2978%, rgb(0, 120, 212) 43.184%)",
                                      maskImage: `url('${img18}')`,
                                    }}
                                  >
                                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0.5px_0px_0px_inset_rgba(255,255,255,0.12),0px_-1px_0px_0px_inset_rgba(0,0,0,0.05),-0.5px_2px_1.5px_0px_inset_rgba(255,255,255,0.25),2px_-2px_6px_0px_inset_rgba(0,0,0,0.1),1px_-1px_1px_0px_inset_rgba(0,0,0,0.1)]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[1040px]"
                    data-name="Section 5"
                    id="node-18_47818"
                  >
                    <div
                      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
                      data-name="Section / Title"
                      id="node-18_47819"
                    >
                      <div
                        className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242424] text-[20px] text-left text-nowrap"
                        id="node-18_47820"
                      >
                        <p className="block leading-[28px] whitespace-pre">
                          Find it fast
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[1040px]"
                      data-name="Callouts"
                      id="node-18_47821"
                    >
                      <div
                        className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-xl shrink-0"
                        data-name="Medium card"
                        id="node-18_47822"
                      >
                        <div className="overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
                            <div
                              className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                              data-name="Card"
                              id="node-I18_47822-26671_5950"
                            >
                              <div
                                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative rounded-[777.484px] shrink-0"
                                data-name="Icon"
                                id="node-I18_47822-26671_5951"
                              >
                                <div
                                  className="relative shrink-0 size-8"
                                  data-name="Code Block"
                                  id="node-I18_47822-26671_5952"
                                >
                                  <div
                                    className="absolute left-1/2 size-[26px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                                    data-name="Shape"
                                    id="node-I18_47822-26671_5952-216158_1660"
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      loading="lazy"
                                      src={img21}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                                data-name="Content"
                                id="node-I18_47822-26671_5954"
                              >
                                <div
                                  className="font-['Segoe_UI:Semibold',_sans-serif] relative shrink-0 text-[#242424] text-[16px] text-nowrap"
                                  id="node-I18_47822-26671_5955"
                                >
                                  <p className="block leading-[22px] whitespace-pre">
                                    Build apps with templates
                                  </p>
                                </div>
                                <div
                                  className="font-['Segoe_UI:Regular',_sans-serif] min-w-full relative shrink-0 text-[#424242] text-[14px]"
                                  id="node-I18_47822-26671_5956"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block leading-[20px]">{`Start your proof of concept project and deploy to production with templates for app development. `}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-xl shrink-0"
                        data-name="Medium card"
                        id="node-18_47823"
                      >
                        <div className="overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
                            <div
                              className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                              data-name="Card"
                              id="node-I18_47823-26671_5950"
                            >
                              <div
                                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative rounded-[777.484px] shrink-0"
                                data-name="Icon"
                                id="node-I18_47823-26671_5951"
                              >
                                <div
                                  className="overflow-clip relative shrink-0 size-8"
                                  data-name="Placeholder"
                                  id="node-I18_47823-26671_5952"
                                >
                                  <div
                                    className="absolute h-[23.675px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[24.25px]"
                                    data-name="Shape"
                                    id="node-I18_47823-26671_5952-7826_53296"
                                    style={{ top: "calc(50% + 0.000148296px)" }}
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      loading="lazy"
                                      src={img22}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                                data-name="Content"
                                id="node-I18_47823-26671_5954"
                              >
                                <div
                                  className="font-['Segoe_UI:Semibold',_sans-serif] relative shrink-0 text-[#242424] text-[16px] text-nowrap"
                                  id="node-I18_47823-26671_5955"
                                >
                                  <p className="block leading-[22px] whitespace-pre">
                                    Model catalog and benchmarks
                                  </p>
                                </div>
                                <div
                                  className="font-['Segoe_UI:Regular',_sans-serif] min-w-full relative shrink-0 text-[#424242] text-[14px]"
                                  id="node-I18_47823-26671_5956"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block leading-[20px]">
                                    Explore the latest models and see how select
                                    models compare to each other.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-xl shrink-0"
                        data-name="Medium card"
                        id="node-18_47824"
                      >
                        <div className="overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
                            <div
                              className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                              data-name="Card"
                              id="node-I18_47824-26671_5950"
                            >
                              <div
                                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative rounded-[777.484px] shrink-0"
                                data-name="Icon"
                                id="node-I18_47824-26671_5951"
                              >
                                <div
                                  className="relative shrink-0 size-8"
                                  data-name="Shield Task"
                                  id="node-I18_47824-26671_5952"
                                >
                                  <div
                                    className="absolute h-[27.997px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[26px]"
                                    data-name="Shape"
                                    id="node-I18_47824-26671_5952-357476_29"
                                    style={{ top: "calc(50% - 0.00128746px)" }}
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      loading="lazy"
                                      src={img23}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                                data-name="Content"
                                id="node-I18_47824-26671_5954"
                              >
                                <div
                                  className="font-['Segoe_UI:Semibold',_sans-serif] relative shrink-0 text-[#242424] text-[16px] text-nowrap"
                                  id="node-I18_47824-26671_5955"
                                >
                                  <p className="block leading-[22px] whitespace-pre">
                                    Safety and security
                                  </p>
                                </div>
                                <div
                                  className="font-['Segoe_UI:Regular',_sans-serif] min-w-full relative shrink-0 text-[#424242] text-[14px]"
                                  id="node-I18_47824-26671_5956"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block leading-[20px]">{`Learn the end-to-end process of incorporating safety and security into your AI solution. `}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-xl shrink-0"
                        data-name="Medium card"
                        id="node-18_47825"
                      >
                        <div className="overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-[16px] relative w-full">
                            <div
                              className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
                              data-name="Card"
                              id="node-I18_47825-26671_5950"
                            >
                              <div
                                className="box-border content-stretch flex flex-row items-center justify-start p-0 relative rounded-[777.484px] shrink-0"
                                data-name="Icon"
                                id="node-I18_47825-26671_5951"
                              >
                                <div
                                  className="relative shrink-0 size-8"
                                  data-name="Shapes"
                                  id="node-I18_47825-26671_5952"
                                >
                                  <div
                                    className="absolute left-1/2 size-[26px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                                    data-name="Shape"
                                    id="node-I18_47825-26671_5952-294386_2084"
                                  >
                                    <img
                                      alt
                                      className="block max-w-none size-full"
                                      loading="lazy"
                                      src={img24}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                                data-name="Content"
                                id="node-I18_47825-26671_5954"
                              >
                                <div
                                  className="font-['Segoe_UI:Semibold',_sans-serif] relative shrink-0 text-[#242424] text-[16px] text-nowrap"
                                  id="node-I18_47825-26671_5955"
                                >
                                  <p className="block leading-[22px] whitespace-pre">
                                    Multimodal intelligence
                                  </p>
                                </div>
                                <div
                                  className="font-['Segoe_UI:Regular',_sans-serif] min-w-full relative shrink-0 text-[#424242] text-[14px]"
                                  id="node-I18_47825-26671_5956"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block leading-[20px]">
                                    Explore how you can transform content of any
                                    modality into task specific structured data
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}