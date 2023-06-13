import { createContext, Image } from "react";
import { Explanation, Module } from "../util/objects";
import { Question } from "../util/objects";
import { Story } from "../util/objects";
import TB1a from "../assets/TB1a.png";
import TB1b from "../assets/TB1b.png";
import TB2a from "../assets/TB2a.png";
import TB2b from "../assets/TB2b.png";
import TB2c from "../assets/TB2c.png";
import TB3ai from "../assets/TB3ai.png";
import TB3aiii from "../assets/TB3aiii.png";
import TB3avii from "../assets/TB3avii.png";
import TB4d from "../assets/TB4d.png";
import TB4ei from "../assets/TB4ei.png";
import TB4eii from "../assets/TB4eii.png";
import TB5a from "../assets/TB5a.png";
import TB6a from "../assets/TB6a.png";
import TB6c from "../assets/TB6c.png";
import TB7a from "../assets/TB7a.png";
import TB7ai from "../assets/TB7ai.png";
import TB7av1 from "../assets/TB7av1.png";
import TB7av3 from "../assets/TB7av3.png";
import TB7b from "../assets/TB7b.png";
import background from "../assets/background.jpg";

export const initialState = {
  modules: [],
  background: background,
};

const imgStrList = [
  "TB1a.png",
  "TB1b.png",
  "TB2a.png",
  "TB2b.png",
  "TB2c.png",
  "TB3ai.png",
  "TB3aiii.png",
  "TB3avii.png",
  "TB4d.png",
  "TB4ei.png",
  "TB4eii.png",
  "TB5a.png",
  "TB6a.png",
  "TB6c.png",
  "TB7a.png",
  "TB7ai.png",
  "TB7av1.png",
  "TB7av3.png",
  "TB7b.png",
  "null",
];
const imgList = [
  TB1a,
  TB1b,
  TB2a,
  TB2b,
  TB2c,
  TB3ai,
  TB3aiii,
  TB3avii,
  TB4d,
  TB4ei,
  TB4eii,
  TB5a,
  TB6a,
  TB6c,
  TB7a,
  TB7ai,
  TB7av1,
  TB7av3,
  TB7b,
  null,
];
const imgs = new Map();
for (i = 0; i < imgStrList.length; i++) {
  imgs.set(imgStrList[i], imgList[i]);
}
export default function readState(Modules) {
  var acc = [];
  for (key in Modules) {
    var modulePages = [];
    const pages = Modules[key]["pages"];
    let pageId = 0;
    let pageObject = null;
    for (let i = 0; i < pages.length; i++) {
      let item = pages[i];
      if (item["screen"] == "story") {
        pageObject = new Story(pageId, item["text"], imgs.get(item["image"]));
      } else if (item["screen"] == "question") {
        pageObject = new Question(
          pageId,
          item["question"],
          item["type"],
          item["answer"],
          item["answerChoices"],
          imgs.get(item["questionImage"])
        );
      } else if (item["screen"] == "explanation") {
        pageObject = new Explanation(pageId, item["text"], item["answer"]);
      }
      pageId++;
      modulePages.push(pageObject);
    }
    const module = new Module(
      key,
      Modules[key]["moduleName"],
      "",
      imgs.get(Modules[key]["moduleImage"]),
      modulePages
    );
    acc.push(module);
  }

  return acc;
}

export const reducer = (_, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        modules: action.payload.modules,
        background: action.payload.background,
      };
    case "MODULE_COMPLETE":
      return {
        modules: action.payload.modules,
      };
  }
};

export const GlobalContext = createContext(initialState);
