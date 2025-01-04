import View from './View.js';
import previewView from './previewView.js';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errormessage = 'No recipes found for your query! Please try another one ;)';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';

  _generateMarkup() {
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}
export default new resultsView();
