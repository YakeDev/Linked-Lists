// linkedList.js
import { Node } from './node.js'; // Importer la classe Node

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Ajouter un nœud à la fin de la liste
  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  // Ajouter un nœud au début de la liste
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  // Retourner la taille de la liste
  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Retourner le premier nœud de la liste
  head() {
    return this.headNode;
  }

  // Retourner le dernier nœud de la liste
  tail() {
    let current = this.headNode;
    while (current !== null && current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // Retourner le nœud à un index donné
  at(index) {
    let current = this.headNode;
    let count = 0;
    while (current !== null && count < index) {
      current = current.nextNode;
      count++;
    }
    return current;
  }

  // Supprimer le dernier nœud de la liste
  pop() {
    if (this.headNode === null) return null;
    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }
    let current = this.headNode;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Vérifier si une valeur est dans la liste
  contains(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Trouver l'index d'une valeur donnée
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // Représenter la liste sous forme de chaîne de caractères
  toString() {
    let current = this.headNode;
    let result = '';
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }

  // Insérer un nœud à un index donné
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.headNode;
    let count = 0;

    while (current !== null && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    if (current !== null) {
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
    }
  }

  // Supprimer un nœud à un index donné
  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let count = 0;

    while (current !== null && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    if (current !== null && current.nextNode !== null) {
      current.nextNode = current.nextNode.nextNode;
    }
  }
}
