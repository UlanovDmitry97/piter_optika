export function map() {
  const map = document.querySelector('#map');

  if(map) {
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.938955, 30.315644],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
      });

      // Заготовка для кастомной метки на карте
      var myPlacemark = new ymaps.Placemark([60.059090, 30.335029], {}, {
      });
      var myPlacemark2 = new ymaps.Placemark([59.867145, 30.259454], {}, {
      });
      var myPlacemark3 = new ymaps.Placemark([59.908047, 30.297507], {}, {
      });
      var myPlacemark4 = new ymaps.Placemark([60.001964, 30.208654], {}, {
      });
      var myPlacemark5 = new ymaps.Placemark([60.032852, 30.418761], {}, {
      });
      var myPlacemark6 = new ymaps.Placemark([59.833909, 30.349025], {}, {
      });
      var myPlacemark7 = new ymaps.Placemark([59.879922, 30.265625], {}, {
      });
      var myPlacemark8 = new ymaps.Placemark([60.008099, 30.257424], {}, {
      });
      var myPlacemark9 = new ymaps.Placemark([59.850595, 30.269380], {}, {
      });
      var myPlacemark10 = new ymaps.Placemark([59.854065, 30.320665], {}, {
      });
      var myPlacemark11 = new ymaps.Placemark([59.899667, 30.275300], {}, {
      });
      var myPlacemark12 = new ymaps.Placemark([60.039908, 30.324124], {}, {
      });
      var myPlacemark13 = new ymaps.Placemark([59.964759, 30.309993], {}, {
      });
      var myPlacemark14 = new ymaps.Placemark([60.005425, 30.298545], {}, {
      });
      var myPlacemark15 = new ymaps.Placemark([59.949911, 30.231912], {}, {
      });
      var myPlacemark16 = new ymaps.Placemark([59.914268, 30.474457], {}, {
      });
      var myPlacemark17 = new ymaps.Placemark([59.986758, 30.299150], {}, {
      });
      var myPlacemark18 = new ymaps.Placemark([59.942683, 30.347929], {}, {
      });
      var myPlacemark19 = new ymaps.Placemark([59.986758, 30.299150], {}, {
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.geoObjects.add(myPlacemark2);
      myMap.geoObjects.add(myPlacemark3);
      myMap.geoObjects.add(myPlacemark4);
      myMap.geoObjects.add(myPlacemark5);
      myMap.geoObjects.add(myPlacemark6);
      myMap.geoObjects.add(myPlacemark7);
      myMap.geoObjects.add(myPlacemark8);
      myMap.geoObjects.add(myPlacemark9);
      myMap.geoObjects.add(myPlacemark10);
      myMap.geoObjects.add(myPlacemark11);
      myMap.geoObjects.add(myPlacemark12);
      myMap.geoObjects.add(myPlacemark13);
      myMap.geoObjects.add(myPlacemark14);
      myMap.geoObjects.add(myPlacemark15);
      myMap.geoObjects.add(myPlacemark16);
      myMap.geoObjects.add(myPlacemark17);
      myMap.geoObjects.add(myPlacemark18);
      myMap.geoObjects.add(myPlacemark19);
    }
  }
}
