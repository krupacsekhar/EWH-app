import { exp } from "react-native/Libraries/Animated/Easing";

/**
 *  Object representations of JSON modules
 */
export class Module {
  constructor(id, name, overview, image, pages) {
    this.id = id; // int: unique id
    this.name = name; // String: text
    this.overview = overview; // String: text
    this.image = image; // String: path to icon
    this.pages = pages; // Array: list of content objects
    this.complete = false;
  }
}

export const ContentType = {
  Story: Symbol("story"),
  Question: Symbol("question"),
  Explanation: Symbol("explanation"),
};

export class Content {
  constructor(id, type) {
    this.id = id; // int: unique id
    this.type = type; // ContentType: enum representing content types
  }
}

export class Story extends Content {
  constructor(id, text, image) {
    super(id, ContentType.Story);
    this.text = text; // String: text
    this.image = image; // String: path to image
  }
}

export class Question extends Content {
  constructor(id, question, qtype, answer, choices, explanation, image) {
    super(id, ContentType.Question);
    this.question = question; // String: text
    this.answerchoices = choices;
    this.questiontype = qtype;
    this.answer = answer; // String: text
    this.image = image; // String: path to image
  }
}

export class Explanation extends Content {
  constructor(id, text, answer) {
    super(id, ContentType.Explanation);
    this.text = text;
    this.answer = answer;
  }
}
