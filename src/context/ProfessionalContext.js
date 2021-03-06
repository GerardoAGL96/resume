import React from 'react';

const Context = React.createContext();

export class ProfessionalProvider extends React.Component {
    state = {
        exp: [
            {
                name: { es: 'Experiencia', en: 'Experience'},
                nodes: [
                    {
                        institution: { es: 'Grupo Hostienda', en: 'Hostienda Group' },
                        role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
                        info: { start: { es: 'Mayo 2018', en: 'May 2018'}, end: null },
                        desc: {
                            es: 'Dedicado al desarrollo de aplicaciones web, trabajando del lado del backend dando soporte a diferentes clientes y desarrollando soluciones tecnológicas para sus ecommerce.',
                            en: 'Dedicated to the development of web applications, working on the backend side giving support to different clients and developing technological solutions for their ecommerce.'
                        }
                    }
                ]
            },
            {
                name: { es: 'Educación', en: 'Education'},
                nodes: [
                    {
                        institution: { es: 'Universidad Nacional Experimental de Guayana', en: 'Universidad Nacional Experimental de Guayana' },
                        role: { es: 'Ingeniería en Informática', en: 'Computer engineering' },
                        info: { start: { es: 'Marzo 2014', en: 'March 2014'}, end: null },
                        desc: {
                            es: 'Este año 2019 es el quinto aniversario de mi admisión en la universidad, donde he aprendido mucho de lo que sé hoy y donde me he formado como profesional. Siendo el último requisito para poder graduarme el hacer mi trabajo de grado.',
                            en: 'This year 2019 marks the fifth anniversary of my admission to the university, where I have learned much of what I know today and where I have trained as a professional. Being the last requirement to graduate do my degree work.'
                        }
                    },
                    {
                        institution: { es: 'Udemy - React Front to Back', en: 'Udemy - React Front to Back' },
                        role: { es: 'React.js', en: 'React.js' },
                        info: { start: { es: 'Octubre 2018', en: 'October 2018' }, end: { es: 'Noviembre 2018', en: 'November 2018' } },
                        desc: {
                            es: 'En este curso, aprendo a dominar los conceptos de React 16.3+, incluida la nueva Context API y Redux. El objetivo era aprender ciertos conceptos mientras se construían progresivamente aplicaciones reales. <a href="https://www.udemy.com/certificate/UC-O085Z0D7/" target="_blank">Ver certificado.</a>',
                            en: 'In this course i learn to master React 16.3+ concepts including the new Context API as well as Redux. The target was to learn certain concepts while progressively building real applications. <a href="https://www.udemy.com/certificate/UC-O085Z0D7/" target="_blank">See certificate.</a>'
                        }
                    }
                ]
            },
        ],
        knowledge: [
            {
                name: { es: 'Habilidades', en: 'Skills'},
                nodes: [
                    {
                        es: 'Desarrollo web',
                        en: 'Web development'
                    },
                    {
                        es: 'Modelado de Bases de Datos',
                        en: 'Database Modeling'
                    },
                    {
                        es: 'Ingeniería del Software',
                        en: 'Software Engineering'
                    },
                    {
                        es: 'Capacidad de trabajo duro',
                        en: 'Hardwork Capacity'
                    },
                    {
                        es: 'Siempre abierto a aprender',
                        en: 'Always open to learn'
                    }
                ]
            },
            {
                name: { es: 'Tecnologías', en: 'Tools'},
                nodes: [
                    { es: 'Laravel', en: 'Laravel' },
                    { es: 'Node.js', en: 'Node.js' },
                    { es: 'React', en: 'React' },
                    { es: 'JQuery', en: 'JQuery' },
                    { es: 'MySQL', en: 'MySQL' },
                    { es: 'PostgreSQL', en: 'PostgreSQL' },
                    { es: 'MongoDB', en: 'MongoDB' }
                ]
            }
        ]
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const ProfessionalConsumer = Context.Consumer;

export function withProfessionalContext (WrappedComponent) {
    class WithProfessionalContext extends React.Component {
        render () {
            return (
                <ProfessionalConsumer>
                    {state => (
                        <WrappedComponent {...this.props} {...state} />
                    )}
                </ProfessionalConsumer>
            );
        }
    }

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithProfessionalContext.displayName = `WithProfessionalContext(${name})`;

    return WithProfessionalContext;
}