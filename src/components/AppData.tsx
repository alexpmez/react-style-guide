import AppData from '../data/main.json';

const localData:any = {
  colorArray: [],
  branding: AppData.branding,
  buttons: AppData.buttons,
  btnsIcons: AppData.buttons[1]['btns-icons'],
  forms: AppData["forms"],
  tables: AppData["tables"],
  navItems: AppData['nav-items'],
  customIcons: AppData['custom-icons'],
  fontAwesomeIcons: AppData['font-awesome-icons'],
  clients: AppData.clients,
  popupsModals: AppData['popups-modals']
}

//console.log("from AppData " + localData.btnsIcons);
//compare elements of the jason navitem array, sort them in numerical order
localData.navItems.sort(
  function(a:any, b:any) {
    if(a.id < b.id) return -1;
    if(a.id > b.id) return 1;
    return 0;
  }
);

//push the json colors array to the local colorArray
for(const el of AppData.colors) {
  localData.colorArray.push(el);
}

export default localData;