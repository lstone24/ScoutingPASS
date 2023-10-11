var config_data = `
{
  "title": "Scouting PASS 2023-24 FTC edition",
  "page_title": "Centerstage",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023mirr",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Qualifications<br>",
        "de": "Eliminations"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot Position",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red backdrop<br>",
        "b1": "Blue backdrop<br>",
        "r2": "Red landing zone<br>",
        "b2": "Blue landing zone<br>"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
	{ "name": "Are they using<br>a pixel or team prop?",
	  "code": "spi",
	  "type": "radio",
	  "choices": {
		  "px": "Pixel",
		  "tp": "Team Prop"
	  },
	  "defaultValue": "px"
	},
    { "name": "Is their robot<br>on the field?",
      "code": "as",
      "type": "bool"
	}
  ],
  "auton": [
    { "name": "Did the robot park<br>in the Backstage?",
	  "code": "prk",
	  "type": "bool"
	},
	{ "name": "Purple pixel on<br>randomized line",
	  "code": "plr",
	  "type": "bool"
	},
	{ "name": "Yellow pixel on<br>correct Backdrop position",
	  "code": "ybr",
	  "type": "bool"
	},
	{ "name": "All pixels they placed<br>in the Backdrop",
	  "code": "abd",
	  "type": "counter",
	  "defaultValue": 0
	},
	{ "name": "All pixels they placed<br>in the Backstage",
	  "code": "abs",
	  "type": "counter",
	  "defaultValue": 0
	}
  ],
  "teleop": [
    { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "wf",
      "type": "bool"
    },
    { "name": "If defended, who defended this bot<br>(if not defended, leave blank)",
      "code": "who",
      "type": "text"
    },
	{ "name": "Picks up from<br>double substation table",
	  "code": "dss",
	  "type": "bool"
	},
    { "name": "Can pick up cones<br>from any orientation",
      "code": "cao",
      "type": "bool"
	},
    { "name": "Floor Pickup",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Final Position",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "If docked/engaged, total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "type": "counter"
    },
    { "name": "Did they knock their alliance<br>partners off the charge station?",
      "code": "kop",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average (the thought was there)<br>",
        "a": "Average (got in the way from time to time)<br>",
        "g": "Good (was very annoying)<br>",
        "e": "Excellent (An absolute menace)<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
	{ "name": "Who did they play<br>defense against?",
      "code": "wda",
      "type": "text",
      "size": 15,
      "maxSize": 100
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 10000
    }
  ]
}`;
