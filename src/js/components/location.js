import $ from 'jquery'
import 'jquery-ui-bundle';

export function locationTabs() {
  const tabs = document.querySelectorAll('.locations__tab');

  if(tabs) {
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const path = e.target.dataset.target;
        const tabsContentActive = document.querySelector(`.locations__tab-content[data-path=${path}]`);
        const tabsContent = document.querySelectorAll('.locations__tab-content');

        tabs.forEach(tab => {
          tab.classList.remove('locations__tab_active');
        });

        tabsContent.forEach(tabsContent => {
          console.log(tabsContent)
          tabsContent.classList.remove('locations__tab-content_active');
        });

        e.target.classList.add('locations__tab_active');

        tabsContentActive.classList.add('locations__tab-content_active');
      });
    });
  }
};

export function accordionLocation () {
  const accordion = document.querySelector('#accordion');

  if(accordion) {
    $( function() {
      $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: true
      });
    } );
  }
};