class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space === 0) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({
      wineName: wineName,
      wineType: wineType,
      price: price,
      paid: false,
    });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    for (let i = 0; i < this.wines.length; i++) {
      const wine = this.wines[i];
      if (wine.wineName === wineName) {
        if (wine.paid) {
          throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for ${price}$.`;
      }
    }
    throw new Error(`${wineName} is not in the cellar.`);
  }

  openBottle(wineName) {
    for (let i = 0; i < this.wines.length; i++) {
      const wine = this.wines[i];
      if (wine.wineName === wineName) {
        if (!wine.paid) {
          throw new Error(
            `${wineName} needs to be paid before opening the bottle.`
          );
        }
        this.wines.splice(i, 1);
        return `You drank a bottle of ${wineName}.`;
      }
    }
    throw new Error(`The wine you're looking for is not found.`);
  }

  cellarRevision(wineType) {
    let selectedWines = this.wines;
    if (wineType) {
      selectedWines = selectedWines.filter(
        (wine) => wine.wineType === wineType
      );
      if (selectedWines.length === 0) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    }
    const emptySlots = this.space;
    const paidBill = this.bill;
    let output = `You have space for ${emptySlots} bottles more.\n`;
    output += `You paid ${paidBill}$ for the wine.\n`;
    selectedWines.sort((a, b) => a.wineName.localeCompare(b.wineName));
    selectedWines.forEach((wine) => {
      const status = wine.paid ? "Paid" : "Not Paid";
      output += `${wine.wineName} > ${wine.wineType} - ${status}.\n`;
    });
    return output;
  }
}

const selection = new WineSelection(2);
console.log(
  selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50)
);
console.log(
  selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120)
);
console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));

// const selection = new WineSelection(2);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// console.log(selection.payWineBottle("Sauvignon Blanc Marlborough", 120));
// console.log(selection.payWineBottle("Bodegas Godelia Mencía", 144));
//
// const selection = new WineSelection(2);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
// selection.payWineBottle("Sauvignon Blanc Marlborough", 50);
// console.log(selection.openBottle("Sauvignon Blanc Marlborough"));
// console.log(selection.openBottle("Cabernet Sauvignon Napa Valley"));
//
// const selection = new WineSelection(2);
// console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
// console.log(selection.cellarRevision("Rose"));
//
// const selection = new WineSelection(5);
// selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);
// selection.payWineBottle("Bodegas Godelia Mencía", 144);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
// console.log(selection.cellarRevision());
