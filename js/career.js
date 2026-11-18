// OPEN POSITIONS: edit this list to add, change or remove a job.
// "title" is the name on the card and in the application email.
// "blocks" is the job description copied paragraph by paragraph from the Word file; see renderDetails below.
const CAREER_JOBS = [
  {
    "title": "Estimation Engineer",
    "blocks": [
      {
        "t": "h1",
        "text": [
          {
            "b": "Job Description"
          }
        ]
      },
      {
        "t": "h2",
        "text": [
          {
            "b": "Estimation Engineer – Commercial Kitchens & Custom Stainless Steel"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Company:"
          },
          " Kiquip India \n",
          {
            "b": "Location:"
          },
          " Udaipur, Rajasthan, India (Showroom-based)\n",
          {
            "b": "Employment:"
          },
          " Full-time, On-site\n",
          {
            "b": "Experience:"
          },
          " 3–5 years preferred\n",
          {
            "b": "Industry:"
          },
          " Commercial Kitchen Equipment, Foodservice Equipment & Stainless Steel Manufacturing"
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "About Us"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Kiquip and Nexus Kitchen Group provide complete commercial kitchen solutions, combining international equipment brands with specialized manufacturing capabilities in the India, UAE and Europe."
        ]
      },
      {
        "t": "p",
        "text": [
          "Our portfolio covers the full range of professional kitchen solutions through Nexus Kitchen Group’s six specialized brands: NORTH (commercial refrigeration), DARC (refrigerated displays, bars and custom counters), AVANTE (commercial kitchen ventilation, filtration and fire suppression systems), KOOK (bespoke cooking suites and custom stainless-steel fabrication), KOPA (charcoal ovens and professional grilling solutions) and KARV (premium outdoor kitchens and living solutions). Together with Kiquip’s international equipment brand portfolio, we offer complete turnkey commercial kitchen solutions for hotels, restaurants, hospitality groups and other commercial projects."
        ]
      },
      {
        "t": "p",
        "text": [
          "We are looking for an experienced Estimation Engineer to join our team in Udaipur and support our growing business across India and international markets."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Role Overview"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "The Estimation Engineer will be responsible for preparing accurate, competitive and commercially viable quotations for three main categories:"
        ]
      },
      {
        "t": "ol",
        "items": [
          [
            {
              "b": "Turnkey Commercial Kitchens:"
            },
            " Complete kitchen equipment packages covering cooking, refrigeration, preparation, warewashing, ventilation and other foodservice equipment."
          ],
          [
            {
              "b": "DARC Displays & Custom Fabrication:"
            },
            " Refrigerated displays, custom bars, counters and bespoke stainless-steel equipment."
          ],
          [
            {
              "b": "NORTH Refrigeration:"
            },
            " Standard and customized commercial refrigeration equipment."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          "The ideal candidate must combine strong knowledge of commercial kitchen equipment and international brands with a practical understanding of stainless-steel fabrication and manufacturing costs."
        ]
      },
      {
        "t": "p",
        "text": [
          "As the position is based in our Udaipur showroom, the candidate will also occasionally welcome customers, consultants and other visitors, introduce our products and represent the company professionally."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Key Responsibilities"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "1. Turnkey Kitchen Equipment Estimation"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Review client enquiries, Bills of Quantities (BOQs), kitchen layouts, specifications and tender documents."
          ],
          [
            "Prepare accurate equipment selections, cost estimates and quotations for complete commercial kitchen projects."
          ],
          [
            "Demonstrate strong knowledge of commercial kitchen equipment categories, including cooking, refrigeration, dishwashing, preparation, bakery, ventilation and other specialist equipment."
          ],
          [
            "Understand the major international and Indian commercial kitchen equipment brands, their product ranges, quality positioning and different price levels."
          ],
          [
            "Identify suitable alternative brands and models across premium, mid-range and value-engineered price segments while ensuring technical compliance."
          ],
          [
            "Obtain and compare supplier prices, discounts, technical specifications and delivery lead times."
          ],
          [
            "Prepare complete quotations, including equipment costs, freight, installation, commissioning and other applicable project expenses."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "2. Custom Stainless-Steel & Manufacturing Estimation"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Prepare detailed manufacturing cost estimates for stainless-steel counters, worktables, sinks, shelving, cabinets, bars, display structures and other customized equipment."
          ],
          [
            "Read and interpret fabrication drawings, dimensions and technical specifications."
          ],
          [
            "Calculate raw material requirements, including stainless-steel sheets, tubes, profiles and other components."
          ],
          [
            "Estimate manufacturing processes and costs, including laser cutting, bending, welding, grinding, polishing and assembly."
          ],
          [
            "Understand how design complexity, special finishes, glass, lighting, refrigeration components and other custom features affect manufacturing costs."
          ],
          [
            "Coordinate with factory, engineering and procurement teams to verify production feasibility and costing assumptions."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "3. NORTH & DARC Product Estimation"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Prepare quotations for standard NORTH refrigeration products and customized configurations."
          ],
          [
            "Develop estimates for DARC refrigerated displays, bespoke counters, bar equipment and custom solutions."
          ],
          [
            "Understand the commercial and technical impact of different product dimensions, configurations, materials, refrigeration systems and finishes."
          ],
          [
            "Coordinate with the relevant product managers, factories and technical teams to obtain pricing and clarify non-standard requirements."
          ],
          [
            "Maintain accurate product costing and pricing information to improve estimation speed and consistency"
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "4. Quotation Management & Commercial Support"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Prepare detailed internal costing sheets and professional customer quotations using Excel and company systems."
          ],
          [
            "Apply approved pricing structures, margins and commercial guidelines."
          ],
          [
            "Clearly identify quotation inclusions, exclusions, assumptions, deviations and delivery conditions."
          ],
          [
            "Maintain an updated database of supplier pricing, material costs, labour rates and manufacturing cost benchmarks."
          ],
          [
            "Coordinate with sales, procurement, engineering and production teams to ensure timely quotation submissions."
          ],
          [
            "Track enquiries, quotation revisions and outstanding supplier information."
          ],
          [
            "Support technical and commercial clarifications with clients, consultants and contractors."
          ],
          [
            "Assist with cost comparisons and quotation revisions during commercial negotiations."
          ],
          [
            "Ensure awarded projects are handed over with clear specifications and assumptions."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "5. Showroom & Visitor Support"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Welcome visitors to the showroom in a professional and friendly manner when required."
          ],
          [
            "Provide a general introduction to the company, its brands and product portfolio."
          ],
          [
            "Explain basic product features, applications and technical advantages to prospective customers."
          ],
          [
            "Support showroom visits by consultants, architects, hospitality operators and other business partners."
          ],
          [
            "Record customer enquiries and coordinate the necessary follow-up with the sales team."
          ],
          [
            "Maintain a professional and welcoming showroom environment."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Required Qualifications & Experience"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Education"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Diploma or Bachelor's degree in Mechanical Engineering, Production Engineering or a related technical discipline."
          ],
          [
            "Candidates with strong, relevant industry experience will also be considered."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Professional Experience"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Preferably 3 to 5 years of experience in commercial kitchen equipment estimation, kitchen contracting or stainless-steel equipment manufacturing."
          ],
          [
            "Proven experience preparing BOQs, cost estimates and quotations for commercial kitchen equipment projects."
          ],
          [
            "Practical knowledge of stainless-steel fabrication processes and manufacturing cost estimation."
          ],
          [
            "Experience working with kitchen equipment manufacturers, dealers, turnkey kitchen contractors or specialist foodservice equipment suppliers."
          ],
          [
            "Familiarity with international commercial kitchen equipment brands and pricing."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Technical Skills"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Essential"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Strong proficiency in Microsoft Excel, including detailed costing and quotation preparation."
          ],
          [
            "Ability to read and interpret AutoCAD drawings, kitchen layouts and fabrication drawings."
          ],
          [
            "Ability to perform equipment quantity take-offs and material calculations."
          ],
          [
            "Knowledge of commercial kitchen equipment types, applications, specifications and leading brands."
          ],
          [
            "Understanding of stainless-steel fabrication processes and manufacturing costs."
          ],
          [
            "Ability to compare technical specifications and identify equivalent equipment."
          ],
          [
            "Understanding of supplier pricing, cost structures and commercial margins."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Preferred"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Hands-on experience estimating customized stainless-steel kitchen equipment."
          ],
          [
            "Experience with commercial refrigeration and refrigerated display equipment."
          ],
          [
            "Ability to use AutoCAD for basic drawing reviews, measurements and modifications."
          ],
          [
            "Experience with ERP or quotation management systems."
          ],
          [
            "Previous exposure to GCC or international commercial kitchen projects."
          ],
          [
            "Familiarity with procurement, importing and logistics cost considerations."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Personal Attributes"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Strong numerical and analytical skills with excellent attention to detail."
          ],
          [
            "Commercially minded, with the ability to balance competitive pricing and profitability."
          ],
          [
            "Organized and capable of managing multiple quotations and deadlines."
          ],
          [
            "Independent, proactive and comfortable coordinating with different departments."
          ],
          [
            "Clear written and spoken English; Hindi communication skills required."
          ],
          [
            "Professional, approachable and confident when interacting with showroom visitors."
          ],
          [
            "Willing to learn new product categories, brands and manufacturing methods."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "What We Offer"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "The opportunity to work with an international commercial kitchen manufacturing and distribution group."
          ],
          [
            "Exposure to a diverse portfolio of international equipment brands, commercial refrigeration and customized stainless-steel manufacturing."
          ],
          [
            "Direct collaboration with experienced technical, production and commercial teams across India, the UAE and Europe."
          ],
          [
            "A role combining engineering, manufacturing knowledge and commercial decision-making."
          ],
          [
            "Opportunity for professional growth as our India operations expand."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Work Location:"
          },
          " Udaipur, Rajasthan\n",
          {
            "b": "Salary:"
          },
          " Competitive and based on relevant experience and technical capabilities."
        ]
      }
    ]
  },
  {
    "title": "2D CAD Technician",
    "blocks": [
      {
        "t": "h1",
        "text": [
          {
            "b": "Job Description"
          }
        ]
      },
      {
        "t": "h2",
        "text": [
          {
            "b": "2D CAD Technician – Manufacturing, Installation & Submittal Drawings"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Company:"
          },
          " Kiquip India\n",
          {
            "b": "Location:"
          },
          " Udaipur, Rajasthan, India\n",
          {
            "b": "Reports To:"
          },
          " R&D and Production Manager\n",
          {
            "b": "Employment:"
          },
          " Full-time, On-site\n",
          {
            "b": "Experience:"
          },
          " Minimum 3 years\n",
          {
            "b": "Industry:"
          },
          " Commercial Kitchen Equipment, Foodservice Equipment & Stainless Steel Manufacturing"
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "About Us"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Kiquip and Nexus Kitchen Group provide complete commercial kitchen solutions, combining international equipment brands with specialized manufacturing capabilities in the India, UAE and Europe."
        ]
      },
      {
        "t": "p",
        "text": [
          "Our portfolio covers the full range of professional kitchen solutions through Nexus Kitchen Group’s six specialized brands: NORTH (commercial refrigeration), DARC (refrigerated displays, bars and custom counters), AVANTE (commercial kitchen ventilation, filtration and fire suppression systems), KOOK (bespoke cooking suites and custom stainless-steel fabrication), KOPA (charcoal ovens and professional grilling solutions) and KARV (premium outdoor kitchens and living solutions). Together with Kiquip’s international equipment brand portfolio, we offer complete turnkey commercial kitchen solutions for hotels, restaurants, hospitality groups and other commercial projects."
        ]
      },
      {
        "t": "p",
        "text": [
          "We are seeking an experienced 2D CAD Technician to join our team in Udaipur and contribute to the continued growth of our business across India and international markets."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Role Overview"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Reporting to the R&D and Production Manager, the 2D CAD Technician will be responsible for preparing and maintaining accurate 2D drawings across our projects, from developing new drawings and updating existing ones to producing manufacturing, installation and client submittal drawings. The scope covers three key areas:"
        ]
      },
      {
        "t": "ol",
        "items": [
          [
            {
              "b": "Installation & Submittal Drawings:"
            },
            " Client-facing installation, layout and section drawings for the proposal and submittal stages of commercial kitchen projects."
          ],
          [
            {
              "b": "Manufacturing Drawings:"
            },
            " 2D part, fabrication and detail drawings, flat patterns and DXF files for custom stainless-steel equipment and other products."
          ],
          [
            {
              "b": "Documentation & Drawing Control:"
            },
            " Drawing registers, revision control, design records and the 2D CAD library."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          "The ideal candidate will bring strong 2D drafting skills in AutoCAD, a practical understanding of sheet-metal fabrication and installation, and the ability to produce clear, accurate drawings to tight deadlines."
        ]
      },
      {
        "t": "p",
        "text": [
          "The role may also include additional responsibilities as assigned by management."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Key Responsibilities"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "1. Installation & Submittal Drawings"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Collaborate with the team to define installation drawing guidelines that meet client requirements during the proposal and submittal stages."
          ],
          [
            "Ensure these requirements are consistently applied to all drawings issued to clients."
          ],
          [
            "Prepare equipment layouts, installation details and services drawings for commercial kitchen projects."
          ],
          [
            "Prepare fully dimensioned section drawings suitable for client submission."
          ],
          [
            "Ensure all 2D drawings comply with the specified technical requirements."
          ],
          [
            "Follow up with clients to secure timely drawing approvals."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "2. Manufacturing Drawings"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Prepare 2D manufacturing, part and detail drawings with clear dimensions, tolerances and finishing notes."
          ],
          [
            "Prepare flat patterns and DXF files ready for laser cutting and bending, with the correct bend allowances and sheet thicknesses."
          ],
          [
            "Convert workshop and site sketches and measurements into accurate CAD drawings."
          ],
          [
            "Revise and update existing drawings to reflect design changes, working closely with the 3D CAD Technician and other team members."
          ],
          [
            "Support the production team and laser cutting area with drawing clarifications on the shop floor."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "3. Documentation & Drawing Control"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Maintain complete records of drawings, Bills of Materials (BOMs) and design notes for future reference."
          ],
          [
            "Maintain a drawing register with clear revision control and approval status."
          ],
          [
            "Manage the 2D CAD library, including blocks, templates, title blocks and layer standards."
          ],
          [
            "Provide the estimation team with drawings, dimensions and material information to support accurate costing."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "4. Other Duties"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Visit project sites and the workshop as required to take measurements and assess conditions."
          ],
          [
            "Undertake any other duties reasonably assigned by the R&D and Production Manager."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Required Qualifications & Experience"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Education"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Degree or diploma in Drafting, Mechanical Engineering, Civil Engineering or a related field, or completion of a recognised technical drafting programme (e.g. ITI Draughtsman)."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Professional Experience"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Minimum of 3 years of relevant experience using AutoCAD or equivalent 2D design software."
          ],
          [
            "Proven experience producing manufacturing and installation drawings for fabricated products, ideally in commercial kitchen, stainless-steel or sheet-metal equipment."
          ],
          [
            "Experience preparing flat patterns and DXF files for laser cutting (essential)."
          ],
          [
            "Experience preparing submittal drawings for clients or consultants."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Technical Skills"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Essential"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Advanced proficiency in AutoCAD, including layers, blocks, dimensions, layouts and plotting."
          ],
          [
            "Ability to read and interpret architectural, MEP and fabrication drawings."
          ],
          [
            "Sound understanding of stainless-steel grades, sheet thicknesses and bend allowances."
          ],
          [
            "Ability to produce clear, production-ready drawings and BOMs."
          ],
          [
            "Proficient computer skills, including Microsoft Office."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Preferred"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Working knowledge of parametric 3D software such as SolidWorks or Autodesk Inventor."
          ],
          [
            "Knowledge of commercial kitchen, refrigeration or ventilation equipment and their utility requirements."
          ],
          [
            "Experience with nesting software for laser cutting."
          ],
          [
            "Exposure to GCC or other international projects."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Personal Attributes"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Excellent written and verbal communication, interpersonal and listening skills."
          ],
          [
            "Meticulous attention to detail and accuracy."
          ],
          [
            "Well organised, with the ability to manage multiple projects, revisions and deadlines."
          ],
          [
            "Practical, hands-on approach and comfortable working closely with the production team."
          ],
          [
            "Fluent in English; Hindi communication skills required."
          ],
          [
            "Eager to learn new product categories, materials and manufacturing methods."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "What We Offer"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "The opportunity to work with an international commercial kitchen manufacturing and distribution group."
          ],
          [
            "Exposure to the design and manufacture of custom stainless-steel equipment, refrigerated displays and commercial kitchen products."
          ],
          [
            "Direct collaboration with experienced technical, production and commercial teams across India, the UAE and Europe."
          ],
          [
            "A role combining technical drafting with hands-on manufacturing and project knowledge."
          ],
          [
            "Opportunity for professional growth as our India operations expand."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Work Location:"
          },
          " Udaipur, Rajasthan\n",
          {
            "b": "Salary:"
          },
          " Competitive and based on relevant experience and technical capabilities."
        ]
      }
    ]
  },
  {
    "title": "3D CAD Technician",
    "blocks": [
      {
        "t": "h1",
        "text": [
          {
            "b": "Job Description"
          }
        ]
      },
      {
        "t": "h2",
        "text": [
          {
            "b": "3D CAD Technician – Sheet Metal & Weldment Design"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Company:"
          },
          " Kiquip India\n",
          {
            "b": "Location:"
          },
          " Udaipur, Rajasthan, India\n",
          {
            "b": "Reports To:"
          },
          " R&D and Production Manager\n",
          {
            "b": "Employment:"
          },
          " Full-time, On-site\n",
          {
            "b": "Experience:"
          },
          " Minimum 5 years\n",
          {
            "b": "Industry:"
          },
          " Commercial Kitchen Equipment, Foodservice Equipment & Stainless Steel Manufacturing"
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "About Us"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Kiquip and Nexus Kitchen Group provide complete commercial kitchen solutions, combining international equipment brands with specialized manufacturing capabilities in the India, UAE and Europe."
        ]
      },
      {
        "t": "p",
        "text": [
          "Our portfolio covers the full range of professional kitchen solutions through Nexus Kitchen Group’s six specialized brands: NORTH (commercial refrigeration), DARC (refrigerated displays, bars and custom counters), AVANTE (commercial kitchen ventilation, filtration and fire suppression systems), KOOK (bespoke cooking suites and custom stainless-steel fabrication), KOPA (charcoal ovens and professional grilling solutions) and KARV (premium outdoor kitchens and living solutions). Together with Kiquip’s international equipment brand portfolio, we offer complete turnkey commercial kitchen solutions for hotels, restaurants, hospitality groups and other commercial projects."
        ]
      },
      {
        "t": "p",
        "text": [
          "We are seeking an experienced 3D CAD Technician to join our team in Udaipur and contribute to the continued growth of our business across India and international markets."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Role Overview"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Reporting to the R&D and Production Manager, the 3D CAD Technician will be responsible for 3D design activities across our projects, from developing new models and updating existing ones to producing assembly and manufacturing drawings. The role will also contribute to establishing production guidelines and procedures and to planning the allocation of design work within the production department. The scope covers three key areas:"
        ]
      },
      {
        "t": "ol",
        "items": [
          [
            {
              "b": "3D Product & Equipment Design:"
            },
            " Parametric 3D models and assemblies of custom stainless-steel equipment, DARC displays, NORTH refrigeration and other products."
          ],
          [
            {
              "b": "Manufacturing Drawings:"
            },
            " Assembly, part and weldment drawings, flat patterns and BOMs generated from 3D models."
          ],
          [
            {
              "b": "Production Support & Standards:"
            },
            " Model quality checks, production guidelines, CAD database management and technical support to the shop floor."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          "The ideal candidate will bring extensive experience with parametric 3D software, particularly in sheet-metal and weldment design, together with a practical understanding of how stainless-steel equipment is manufactured and installed."
        ]
      },
      {
        "t": "p",
        "text": [
          "The role may also include additional responsibilities as assigned by management."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Key Responsibilities"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "1. 3D Design & Modelling"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Develop accurate parametric 3D models and assemblies of new and existing products."
          ],
          [
            "Design sheet-metal and weldment parts and assemblies, specifying the correct material thicknesses, bend allowances and joining details."
          ],
          [
            "Convert workshop and site sketches and measurements into accurate 3D models."
          ],
          [
            "Revise and update existing models to reflect design changes, working closely with other team members."
          ],
          [
            "Support R&D in the development of new products and standard ranges."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "2. Manufacturing Drawings from 3D Models"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Produce assembly drawings, part drawings, weldment drawings and fully dimensioned sections from 3D models."
          ],
          [
            "Generate flat patterns and DXF files ready for laser cutting and bending."
          ],
          [
            "Generate accurate Bills of Materials (BOMs) for each project."
          ],
          [
            "Provide 3D views and models to the 2D CAD Technician to support installation and submittal drawings."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "3. Quality & Production Support"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Carry out quality checks to confirm that 3D models and drawings meet project specifications and company standards."
          ],
          [
            "Resolve design-related issues and defects that arise during production."
          ],
          [
            "Work closely with the production team and laser cutting area to resolve drawing and manufacturing queries on the shop floor."
          ],
          [
            "Contribute to the development of production guidelines and procedures."
          ],
          [
            "Assist in planning and allocating design workload within the production department."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "4. Documentation & CAD Database"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Maintain complete records of design notes, calculations, models, BOMs, design parameters and equipment performance data for future reference."
          ],
          [
            "Manage the 3D CAD database, including standard parts, templates, material libraries and modelling standards."
          ],
          [
            "Maintain clear version control of models and assemblies."
          ],
          [
            "Provide the estimation team with models, dimensions and material information to support accurate costing."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "5. Other Duties"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Visit project sites and the workshop as required to take measurements and assess conditions."
          ],
          [
            "Undertake any other duties reasonably assigned by the R&D and Production Manager."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Required Qualifications & Experience"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Education"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Degree or diploma in Drafting, Mechanical Engineering or a related field, or completion of a recognised technical drafting programme."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Professional Experience"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Minimum of 5 years of relevant experience using parametric 3D software such as SolidWorks, Autodesk Inventor or Solid Edge."
          ],
          [
            "Proven experience in sheet-metal and weldment part design (essential)."
          ],
          [
            "Working experience with 2D design software such as AutoCAD (essential)."
          ],
          [
            "Experience producing manufacturing drawings for fabricated products, ideally in commercial kitchen, stainless-steel or sheet-metal equipment."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Technical Skills"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Essential"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Advanced proficiency in parametric 3D CAD software, including sheet-metal and weldment modules."
          ],
          [
            "Ability to produce flat patterns, BOMs and production-ready drawings from 3D models."
          ],
          [
            "Working proficiency in AutoCAD or equivalent 2D design software."
          ],
          [
            "Sound understanding of stainless-steel grades, sheet thicknesses, bend allowances and welding methods."
          ],
          [
            "Proficient computer skills, including Microsoft Office."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Preferred"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Knowledge of commercial kitchen, refrigeration or ventilation equipment."
          ],
          [
            "Experience with PDM or other CAD data management systems."
          ],
          [
            "Experience with rendering tools such as KeyShot or SOLIDWORKS Visualize for client presentations."
          ],
          [
            "Exposure to GCC or other international projects."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Personal Attributes"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Excellent written and verbal communication, interpersonal and listening skills."
          ],
          [
            "Meticulous attention to detail and accuracy."
          ],
          [
            "Well organised, with the ability to manage multiple projects, revisions and deadlines."
          ],
          [
            "Practical, hands-on approach and comfortable working closely with the production team."
          ],
          [
            "Fluent in English; Hindi communication skills required."
          ],
          [
            "Eager to learn new product categories, materials and manufacturing methods."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "What We Offer"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "The opportunity to work with an international commercial kitchen manufacturing and distribution group."
          ],
          [
            "Exposure to the design and manufacture of custom stainless-steel equipment, refrigerated displays and commercial kitchen products."
          ],
          [
            "Direct collaboration with experienced technical, production and commercial teams across India, the UAE and Europe."
          ],
          [
            "A role combining design, R&D and hands-on manufacturing knowledge."
          ],
          [
            "Opportunity for professional growth as our India operations expand."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Work Location:"
          },
          " Udaipur, Rajasthan\n",
          {
            "b": "Salary:"
          },
          " Competitive and based on relevant experience and technical capabilities."
        ]
      }
    ]
  },
  {
    "title": "Accountant",
    "blocks": [
      {
        "t": "h1",
        "text": [
          {
            "b": "Job Description"
          }
        ]
      },
      {
        "t": "h2",
        "text": [
          {
            "b": "Accountant – Manufacturing, Trading & Project Accounts"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Company:"
          },
          " Kiquip India\n",
          {
            "b": "Location:"
          },
          " Udaipur, Rajasthan, India (Showroom-based)\n",
          {
            "b": "Employment:"
          },
          " Full-time, On-site\n",
          {
            "b": "Experience:"
          },
          " 3–5 years preferred\n",
          {
            "b": "Industry:"
          },
          " Commercial Kitchen Equipment, Foodservice Equipment & Stainless Steel Manufacturing"
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "About Us"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "Kiquip and Nexus Kitchen Group provide complete commercial kitchen solutions, combining international equipment brands with specialized manufacturing capabilities in the India, UAE and Europe."
        ]
      },
      {
        "t": "p",
        "text": [
          "Our portfolio covers the full range of professional kitchen solutions through Nexus Kitchen Group’s six specialized brands: NORTH (commercial refrigeration), DARC (refrigerated displays, bars and custom counters), AVANTE (commercial kitchen ventilation, filtration and fire suppression systems), KOOK (bespoke cooking suites and custom stainless-steel fabrication), KOPA (charcoal ovens and professional grilling solutions) and KARV (premium outdoor kitchens and living solutions). Together with Kiquip’s international equipment brand portfolio, we offer complete turnkey commercial kitchen solutions for hotels, restaurants, hospitality groups and other commercial projects."
        ]
      },
      {
        "t": "p",
        "text": [
          "We are looking for a reliable and experienced Accountant to join our team in Udaipur and support our growing business across India and international markets."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Role Overview"
          }
        ]
      },
      {
        "t": "p",
        "text": [
          "The Accountant will be responsible for maintaining accurate, compliant and up-to-date financial records for three main areas:"
        ]
      },
      {
        "t": "ol",
        "items": [
          [
            {
              "b": "Manufacturing & Job Costing:"
            },
            " Material, labour and overhead costs for stainless-steel fabrication and custom production projects."
          ],
          [
            {
              "b": "Trading & Imports:"
            },
            " Purchases, imports and sales of international commercial kitchen equipment brands."
          ],
          [
            {
              "b": "Statutory Compliance & Reporting:"
            },
            " GST, TDS, payroll compliance, audits and management reporting."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          "The ideal candidate must combine strong knowledge of Indian accounting and tax compliance with a practical understanding of how costs flow through a manufacturing and project-based business."
        ]
      },
      {
        "t": "p",
        "text": [
          "As the position is based in our Udaipur showroom, the candidate will also support general office administration and coordinate with visitors, suppliers and service providers when required."
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Key Responsibilities"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "1. Day-to-Day Accounting"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Record all purchase, sales, expense, bank and cash transactions accurately in Tally / company systems."
          ],
          [
            "Prepare and check sales invoices, proforma invoices, credit notes and debit notes."
          ],
          [
            "Process supplier bills against purchase orders and goods received notes."
          ],
          [
            "Carry out monthly bank, cash, customer and supplier reconciliations."
          ],
          [
            "Manage petty cash and employee expense claims."
          ],
          [
            "Maintain organised supporting documents for all transactions."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "2. Receivables, Payables & Cash Flow"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Track customer advances, milestone billing and retention for project orders."
          ],
          [
            "Monitor outstanding receivables and coordinate collection follow-up with the sales team."
          ],
          [
            "Prepare supplier payment schedules and process approved payments on time."
          ],
          [
            "Prepare weekly cash flow statements and forecasts for management."
          ],
          [
            "Coordinate with banks for payments, letters of credit, bank guarantees and other banking requirements."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "3. Costing, Inventory & Imports"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Maintain job-wise cost records for manufacturing and project orders, covering stainless steel, components, labour, subcontracting and overheads."
          ],
          [
            "Compare actual costs with estimates and report variances to management and the estimation team."
          ],
          [
            "Maintain inventory records for raw materials, work in progress, finished goods and trading stock, and support periodic stock counts."
          ],
          [
            "Calculate landed costs for imported equipment, including freight, customs duty, clearing and other charges."
          ],
          [
            "Record inter-company transactions with group companies in the UAE and Europe."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "4. Statutory Compliance & Reporting"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Prepare and file GST returns (GSTR-1, GSTR-3B) and reconcile input tax credit with GSTR-2B."
          ],
          [
            "Calculate, deduct and deposit TDS / TCS and file quarterly returns."
          ],
          [
            "Generate e-invoices and e-way bills as required."
          ],
          [
            "Support payroll processing and PF, ESI and Professional Tax compliance."
          ],
          [
            "Prepare monthly MIS reports, including profit and loss, project profitability and expense analysis."
          ],
          [
            "Coordinate with external auditors and the chartered accountant for statutory audit, tax audit and income tax filings."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "5. Office Administration & Support"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Support general office administration, including vendor contracts, insurance, rent and utility payments."
          ],
          [
            "Maintain records of fixed assets, company documents, licences and registrations."
          ],
          [
            "Welcome visitors, suppliers and service providers to the office in a professional manner when required."
          ],
          [
            "Coordinate with sales, procurement and production teams on billing, payments and documentation."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Required Qualifications & Experience"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Education"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "B.Com, M.Com or equivalent degree in Accounting or Finance."
          ],
          [
            "CA Inter / CMA Inter (completed or pursuing) will be an advantage."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Professional Experience"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Preferably 3 to 5 years of accounting experience in a manufacturing, engineering, trading or project-based company."
          ],
          [
            "Hands-on experience with GST, TDS and other Indian statutory compliance."
          ],
          [
            "Experience with job costing, inventory accounting and import transactions."
          ],
          [
            "Experience coordinating with auditors, banks and chartered accountants."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Technical Skills"
          }
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Essential"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Strong proficiency in Tally Prime (or a similar accounting system such as Zoho Books or Busy)."
          ],
          [
            "Strong proficiency in Microsoft Excel, including reconciliations, pivot tables and reports."
          ],
          [
            "Working knowledge of the GST portal, e-invoicing, e-way bills and the TDS (TRACES) portal."
          ],
          [
            "Good understanding of accounting principles, financial statements and month-end closing."
          ],
          [
            "Ability to prepare clear MIS reports and cost statements for management."
          ]
        ]
      },
      {
        "t": "h4",
        "text": [
          {
            "b": "Preferred"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "Experience with ERP systems for inventory and production accounting."
          ],
          [
            "Knowledge of import documentation, customs duty and foreign currency payments."
          ],
          [
            "Experience with project or contract accounting, including milestone billing and retention."
          ],
          [
            "Experience with multi-entity or group company accounting."
          ],
          [
            "Basic knowledge of payroll software and labour law compliance."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "Personal Attributes"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "High level of integrity and confidentiality."
          ],
          [
            "Strong numerical and analytical skills with excellent attention to detail."
          ],
          [
            "Organised and capable of meeting monthly and statutory deadlines."
          ],
          [
            "Independent, proactive and comfortable coordinating with different departments."
          ],
          [
            "Clear written and spoken English; Hindi communication skills required."
          ],
          [
            "Willing to learn new systems, processes and business areas as the company grows."
          ]
        ]
      },
      {
        "t": "h3",
        "text": [
          {
            "b": "What We Offer"
          }
        ]
      },
      {
        "t": "ul",
        "items": [
          [
            "The opportunity to work with an international commercial kitchen manufacturing and distribution group."
          ],
          [
            "Exposure to the finances of a combined manufacturing, trading and project business."
          ],
          [
            "Direct collaboration with experienced technical, production and commercial teams across India, the UAE and Europe."
          ],
          [
            "A role with real responsibility for the financial accuracy and compliance of a growing company."
          ],
          [
            "Opportunity for professional growth as our India operations expand."
          ]
        ]
      },
      {
        "t": "p",
        "text": [
          {
            "b": "Work Location:"
          },
          " Udaipur, Rajasthan\n",
          {
            "b": "Salary:"
          },
          " Competitive and based on relevant experience and qualifications."
        ]
      }
    ]
  }
];

// Renders the Careers section of index.html from CAREER_JOBS above.
// "Apply Now" scrolls to the Write Us form and puts the job's "title" in the form's hidden "Position" field,
// so the application email says which job it is for.
(function () {
  const jobs = CAREER_JOBS;
  const positionInput = document.getElementById('career-form-position');
  const subjectInput = document.getElementById('career-form-subject');
  const jobsEl = document.getElementById('career-jobs');

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderJobs() {
    jobs.forEach(job => {
      const row = el('div', 'career-job');
      const head = el('div', 'career-job__head');
      const info = el('div');
      info.append(el('h3', 'career-job__title', job.title));

      const toggle = el('button', 'brand-details-button', 'View Details');
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');

      const apply = el('a', 'brand-details-button', 'Apply Now');
      apply.href = '#contactform';
      apply.addEventListener('click', () => {
        positionInput.value = job.title;
        subjectInput.value = 'Career application – ' + job.title;
      });

      const actions = el('div', 'career-job__actions');
      actions.append(toggle, apply);
      head.append(info, actions);

      const details = el('div', 'career-job__details');
      const clip = el('div');
      clip.append(renderDetails(job));
      details.append(clip);

      // The whole head row opens and closes the card, except the Apply Now link.
      head.addEventListener('click', event => {
        if (event.target.closest('a')) return;
        const open = row.classList.toggle('is-open');
        toggle.textContent = open ? 'Hide Details' : 'View Details';
        toggle.setAttribute('aria-expanded', String(open));
      });

      row.append(head, details);
      jobsEl.append(row);
    });
  }

  // A block is {"t": "h1".."h4" or "p", "text": segments} or {"t": "ul" or "ol", "items": [segments, ...]}.
  // h1..h4 are the Word file's heading sizes (24pt, 18pt, 13.5pt, bold); they are classes, not page headings.
  // Segments: a string, or {"b": string} for bold; "\n" is a line break.
  function renderText(node, segments) {
    segments.forEach(segment => {
      const bold = typeof segment === 'object';
      const target = bold ? el('strong') : node;
      (bold ? segment.b : segment).split('\n').forEach((part, i) => {
        if (i > 0) target.append(document.createElement('br'));
        if (part) target.append(part);
      });
      if (bold) node.append(target);
    });
    return node;
  }

  function renderDetails(job) {
    const body = el('div', 'career-job__body');
    job.blocks.forEach(block => {
      if (block.t === 'ul' || block.t === 'ol') {
        const list = el(block.t);
        block.items.forEach(item => list.append(renderText(el('li'), item)));
        body.append(list);
      } else {
        body.append(renderText(el('p', block.t === 'p' ? '' : 'career-doc__' + block.t), block.text));
      }
    });
    return body;
  }

  if (jobs.length === 0) {
    jobsEl.append(el('p', 'career-empty', 'There are no open positions at the moment.'));
    return;
  }

  renderJobs();
})();

// Sends the application in the background, so the visitor never leaves for FormSubmit's own "Thanks!" page.
// The /ajax/ address answers JSON: {"success": "true"} once delivered, "false" with a message otherwise.
(function () {
  const form = document.querySelector('.career-form');
  const sent = document.getElementById('career-form-sent');
  const error = document.getElementById('career-form-error');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    error.hidden = true;
    button.disabled = true;
    button.textContent = 'Sending…';
    try {
      const response = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      const result = await response.json();
      if (String(result.success) !== 'true') throw new Error(result.message);
      form.reset();
      sent.showModal();
    } catch (e) {
      error.textContent = 'Your application could not be sent. Please try again, or e-mail us at info@nexuskitchengroup.com.';
      error.hidden = false;
      console.error('Career form:', e);
    } finally {
      button.disabled = false;
      button.textContent = 'Send';
    }
  });
})();
