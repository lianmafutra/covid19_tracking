var cy = cytoscape({
  container: document.getElementById('cy'),

  // boxSelectionEnabled: false,
  // autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'width': 80,
        'height': 80
      })
    .selector('edge')
      .css({
        'content': 'data(name)',
        'width': 1,
        'line-color': '#888',
         'curve-style': 'bezier',
        'target-arrow-color': '#888',
        'source-arrow-color': '#888',
        'target-arrow-shape': 'triangle-backcurve'
      })
    .selector('$node > node')
      .css({
        'shape': 'roundrectangle',
        'text-valign': 'top',
        'height': 'auto',
        'width': 'auto',
        'background-color': '#ccc',
        'background-opacity': 0.333,
        'color': '#888',
        'text-outline-width': 0,
        'font-size': 25
      })

      // custom css
      .selector('group, .group')
      .css({
        'background-color': '#93CDDD',
      })
    
      //status pasien 
      .selector('#positif, .positif')
      .css({
       'background-color':'#eb4d4b'
      })

      .selector('#negatif, .negatif')
      .css({
       'background-color':'#6ab04c'
      })

      .selector('#pengawasan, .pengawasan')
      .css({
       'background-color':'#f0932b'
      }),

    
  // data 
  elements: {

    nodes: [

        //master parent
        { data: { id: '1', name:'pasien 01' }, classes:'positif' },

        //pasien non group
        { data: { id: '2',name:'pasien 02' } },
        { data: { id: '3',name:'pasien 03' } },
        { data: { id: '4',name:'pasien 04' }, classes:'positif'},

        //group 1
        { data: { id: 'group1',name:'Group Kantor' } },
        { data: { id: '5',name:'pasien 05', parent: 'group1'} },
        { data: { id: '6', name:'pasien 06',parent: 'group1'} , classes:'positif'},

        //group 2
        { data: { id: 'group2',name:'Group pasar' } },
        { data: { id: '7',name:'pasien 07',parent: 'group2'}, classes:'positif'},
        { data: { id: '8',name:'pasien 08',parent: 'group2'} },
        { data: { id: '15',name:'pasien 15',parent: 'group2'} },
        { data: { id: '16',name:'pasien 16',parent: 'group2'} },
    
        //group 3
        { data: { id: 'group3',name:'Group Masjid' } },
        { data: { id: '9',name:'pasien 09',parent: 'group3'} },
        { data: { id: '10',name:'pasien 10',parent: 'group3'} ,classes:'negatif' },

        //group 4
        { data: { id: 'group4',name:'Group Bandara' } },
        { data: { id: '11',name:'pasien 11',parent: 'group4'} },
        { data: { id: '12',name:'pasien 12',parent: 'group4'}, classes:'positif' },

        //group 5
        { data: { id: 'group5',name:'Group Band' } },
        { data: { id: '13',name:'pasien 13',parent: 'group5'},classes:'pengawasan' },
        { data: { id: '14',name:'pasien 14',parent: 'group5'} },

        //group 6
        { data: { id: 'group6',name:'Group swalayan' } },
        { data: { id: '17',name:'pasien 17',parent: 'group6'} ,classes:'pengawasan'},
        { data: { id: '18',name:'pasien 18',parent: 'group6'} },
          
    ],

    edges: [
            
        //source = parent 
        //target = child 

        { data: { source: '1', target: '2' } },
        { data: { source: '1', target: '3' } },
        { data: { source: '1', target: '4' } },
        { data: { source: '1', target: '7' } },
        { data: { source: '1', target: '8' } },
        { data: { source: '1', target: '5' } },
        { data: { source: '1', target: '6' } },
        { data: { source: '4', target: '9' } },
        { data: { source: '7', target: '11' } },
        { data: { source: '6', target: '13' } },
        { data: { source: '1', target: '15' } },
        { data: { source: '1', target: '16' } },
        { data: { source: '12', target: '17' } },
        { data: { source: '7', target: '12' } },
        { data: { source: '12', target: '18' } },
        { data: { source: '6', target: '14' } },

        //multiple parent 
        { data: { source: '4', target: '10' } },
        { data: { source: '7', target: '10' } },
       
    ]
  },

  layout: {
    //tipe layout menentukan posisi
    name: 'dagre',


    // rankDir:'LR'
  },


});
