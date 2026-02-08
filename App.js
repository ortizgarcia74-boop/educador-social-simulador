import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Audio } from "expo-av";
import { useEffect } from "react";

/* ======================
   BANCO DE PREGUNTAS
====================== */

const questions = [

/* =====================================================
   EDUCACIÓN SOCIAL · BASE TEÓRICA Y MODELOS
===================================================== */

{
  question: "La Educación Social es una disciplina de carácter fundamentalmente:",
  answers: ["Asistencial", "Pedagógico", "Clínico", "Administrativo"],
  correct: 1
},
{
  question: "El objeto de la Educación Social son principalmente:",
  answers: [
    "Los trastornos psicológicos",
    "Los procesos educativos en contextos sociales",
    "La intervención clínica",
    "La gestión administrativa"
  ],
  correct: 1
},
{
  question: "El modelo promocional en Educación Social se centra en:",
  answers: [
    "La asistencia puntual",
    "El control social",
    "El empoderamiento y desarrollo de capacidades",
    "La corrección de conductas"
  ],
  correct: 2
},
{
  question: "El modelo asistencial se caracteriza por:",
  answers: [
    "Promover autonomía",
    "Cubrir necesidades inmediatas",
    "Trabajo comunitario",
    "Prevención primaria"
  ],
  correct: 1
},
{
  question: "El modelo comunitario pone el acento en:",
  answers: [
    "La persona individual",
    "La institución",
    "La participación y el entorno social",
    "La terapia"
  ],
  correct: 2
},
{
  question: "El acompañamiento socioeducativo implica:",
  answers: [
    "Sustituir decisiones",
    "Guiar procesos respetando la autonomía",
    "Aplicar sanciones",
    "Controlar conductas"
  ],
  correct: 1
},
{
  question: "El enfoque de derechos en Educación Social implica:",
  answers: [
    "Asistencia caritativa",
    "Neutralidad institucional",
    "Garantía de derechos y participación",
    "Intervención normativa exclusiva"
  ],
  correct: 2
},
{
  question: "La intervención centrada en la persona se caracteriza por:",
  answers: [
    "Priorizar la institución",
    "Adaptar la persona al recurso",
    "Respetar decisiones, ritmos y preferencias",
    "Aplicar protocolos rígidos"
  ],
  correct: 2
},
{
  question: "El principio de normalización persigue:",
  answers: [
    "Uniformar conductas",
    "Garantizar condiciones de vida similares al resto de la población",
    "Aplicar medidas especiales",
    "Aislar colectivos"
  ],
  correct: 1
},
{
  question: "El empoderamiento se relaciona con:",
  answers: [
    "Dependencia institucional",
    "Control externo",
    "Desarrollo de capacidades y autonomía",
    "Asistencia prolongada"
  ],
  correct: 2
},

/* =====================================================
   PLANIFICACIÓN, PROYECTOS Y EVALUACIÓN
===================================================== */

{
  question: "La planificación socioeducativa es un proceso:",
  answers: [
    "Espontáneo",
    "Improvisado",
    "Intencional y sistemático",
    "Administrativo"
  ],
  correct: 2
},
{
  question: "Un plan se caracteriza por:",
  answers: [
    "Nivel más concreto",
    "Agrupar actividades",
    "Marco estratégico general",
    "Ser equivalente a un proyecto"
  ],
  correct: 2
},
{
  question: "Un programa es:",
  answers: [
    "Una actividad",
    "Un conjunto de proyectos con objetivos comunes",
    "Un plan general",
    "Un diagnóstico"
  ],
  correct: 1
},
{
  question: "Un proyecto socioeducativo debe incluir:",
  answers: [
    "Solo objetivos",
    "Objetivos, actividades, recursos y evaluación",
    "Solo actividades",
    "Solo evaluación"
  ],
  correct: 1
},
{
  question: "El diagnóstico social tiene como finalidad:",
  answers: [
    "Etiquetar",
    "Conocer la realidad para orientar la intervención",
    "Sancionar",
    "Evaluar impacto"
  ],
  correct: 1
},
{
  question: "La evaluación formativa se realiza:",
  answers: [
    "Al inicio",
    "Durante el proceso",
    "Al finalizar",
    "Tras el impacto"
  ],
  correct: 1
},
{
  question: "La evaluación sumativa tiene como finalidad:",
  answers: [
    "Mejorar el proceso",
    "Valorar resultados finales",
    "Detectar necesidades",
    "Planificar"
  ],
  correct: 1
},
{
  question: "La evaluación de impacto analiza:",
  answers: [
    "Grado de ejecución",
    "Resultados inmediatos",
    "Efectos a largo plazo",
    "Satisfacción profesional"
  ],
  correct: 2
},
{
  question: "Los indicadores sirven para:",
  answers: [
    "Redactar diagnósticos",
    "Medir el grado de consecución de objetivos",
    "Asignar recursos",
    "Planificar actividades"
  ],
  correct: 1
},
{
  question: "La memoria final de un proyecto incluye:",
  answers: [
    "Solo actividades",
    "Evaluación y conclusiones",
    "Diagnóstico inicial",
    "Objetivos futuros exclusivamente"
  ],
  correct: 1
},

/* =====================================================
   SERVICIOS SOCIALES E INTERVENCIÓN
===================================================== */

{
  question: "Los Servicios Sociales Generales se caracterizan por ser:",
  answers: [
    "Especializados",
    "Universales y polivalentes",
    "Residuales",
    "Privados"
  ],
  correct: 1
},
{
  question: "Los Servicios Sociales Especializados se orientan a:",
  answers: [
    "Toda la población",
    "Colectivos con necesidades específicas",
    "Prevención comunitaria",
    "Gestión administrativa"
  ],
  correct: 1
},
{
  question: "El profesional de referencia garantiza:",
  answers: [
    "Control exclusivo",
    "Continuidad y coherencia de la intervención",
    "Decisión unilateral",
    "Sustitución del equipo"
  ],
  correct: 1
},
{
  question: "El trabajo en red implica:",
  answers: [
    "Intervención aislada",
    "Coordinación entre recursos y profesionales",
    "Delegar responsabilidades",
    "Evitar coordinación"
  ],
  correct: 1
},
{
  question: "La derivación adecuada supone:",
  answers: [
    "Cerrar el caso",
    "Trasladar sin coordinación",
    "Coordinar y realizar seguimiento",
    "Evitar intervención posterior"
  ],
  correct: 2
},

/* =====================================================
   INFANCIA, FAMILIA Y PROTECCIÓN
===================================================== */

{
  question: "La situación de riesgo se caracteriza por:",
  answers: [
    "Daño irreversible",
    "Separación inmediata",
    "Factores que pueden perjudicar el desarrollo",
    "Asunción de tutela"
  ],
  correct: 2
},
{
  question: "La situación de desamparo implica:",
  answers: [
    "Carencias leves",
    "Riesgo reversible",
    "Incumplimiento grave de los deberes de protección",
    "Prevención primaria"
  ],
  correct: 2
},
{
  question: "La guarda administrativa supone:",
  answers: [
    "Pérdida definitiva de la patria potestad",
    "Asunción temporal del cuidado",
    "Adopción",
    "Sanción"
  ],
  correct: 1
},
{
  question: "El acogimiento familiar es una medida:",
  answers: [
    "Definitiva",
    "Temporal y protectora",
    "Sancionadora",
    "Institucional"
  ],
  correct: 1
},
{
  question: "La retirada del menor del núcleo familiar se produce en situaciones de:",
  answers: [
    "Riesgo",
    "Prevención primaria",
    "Desamparo",
    "Dificultades educativas"
  ],
  correct: 2
},
{
  question: "La parentalidad positiva se basa en:",
  answers: [
    "Autoridad rígida",
    "Castigo",
    "Afecto, normas y límites adecuados",
    "Control institucional"
  ],
  correct: 2
},

/* =====================================================
   PARTE COMÚN · CONSTITUCIÓN Y LEY 39/2015
===================================================== */

{
  question: "El artículo 14 de la Constitución Española garantiza:",
  answers: [
    "La igualdad ante la ley",
    "La libertad ideológica",
    "El derecho a la educación",
    "La autonomía personal"
  ],
  correct: 0
},
{
  question: "Las leyes que desarrollan derechos fundamentales son:",
  answers: [
    "Ordinarias",
    "Orgánicas",
    "Decretos-ley",
    "Reglamentos"
  ],
  correct: 1
},
{
  question: "El silencio administrativo en procedimientos iniciados a solicitud del interesado es, con carácter general:",
  answers: [
    "Negativo",
    "Positivo",
    "Inexistente",
    "Discrecional"
  ],
  correct: 1
},
{
  question: "El plazo para interponer recurso de alzada es de:",
  answers: [
    "15 días",
    "1 mes",
    "2 meses",
    "3 meses"
  ],
  correct: 1
},
{
  question: "El plazo máximo para resolver un recurso potestativo de reposición es:",
  answers: [
    "15 días",
    "1 mes",
    "3 meses",
    "6 meses"
  ],
  correct: 1
},
{
  question: "Los actos administrativos son inmediatamente ejecutivos salvo:",
  answers: [
    "Cuando se interponga recurso administrativo",
    "En procedimientos sancionadores recurribles",
    "Cuando haya silencio",
    "Si lo decide el órgano"
  ],
  correct: 1
},
{
  question: "La caducidad del procedimiento se produce por:",
  answers: [
    "Falta de competencia",
    "Inactividad del interesado",
    "Inactividad de la Administración",
    "Resolución expresa"
  ],
  correct: 1
},
/* =====================================================
   EDUCACIÓN SOCIAL · INTERVENCIÓN Y METODOLOGÍA
===================================================== */

{
  question: "La intervención socioeducativa se caracteriza por ser:",
  answers: [
    "Esporádica",
    "Intencional y planificada",
    "Improvisada",
    "Exclusivamente normativa"
  ],
  correct: 1
},
{
  question: "El acompañamiento educativo implica principalmente:",
  answers: [
    "Sustituir la toma de decisiones",
    "Guiar procesos respetando la autonomía",
    "Aplicar sanciones",
    "Controlar conductas"
  ],
  correct: 1
},
{
  question: "La relación educativa se basa fundamentalmente en:",
  answers: [
    "Autoridad institucional",
    "Vínculo, confianza y acompañamiento",
    "Control normativo",
    "Distancia profesional estricta"
  ],
  correct: 1
},
{
  question: "El principio de inclusión social implica:",
  answers: [
    "Integración pasiva",
    "Adaptación unilateral",
    "Participación plena en la comunidad",
    "Asistencia puntual"
  ],
  correct: 2
},
{
  question: "La intervención basada en fortalezas pone el foco en:",
  answers: [
    "Déficits y carencias",
    "Problemas estructurales exclusivamente",
    "Recursos y capacidades de la persona",
    "Limitaciones personales"
  ],
  correct: 2
},
{
  question: "La observación participante se caracteriza por:",
  answers: [
    "Distancia profesional estricta",
    "Participación en el contexto observado",
    "Uso exclusivo de registros cuantitativos",
    "Ausencia de interacción"
  ],
  correct: 1
},
{
  question: "La entrevista socioeducativa tiene como finalidad:",
  answers: [
    "Control institucional",
    "Facilitar procesos de cambio y aprendizaje",
    "Evaluación sancionadora",
    "Imposición de normas"
  ],
  correct: 1
},

/* =====================================================
   FAMILIA, INFANCIA Y ADOLESCENCIA
===================================================== */

{
  question: "La intervención familiar desde la Educación Social busca:",
  answers: [
    "Sustituir a la familia",
    "Fortalecer competencias parentales",
    "Aplicar sanciones",
    "Derivar siempre a terapia"
  ],
  correct: 1
},
{
  question: "La función educadora de la familia implica:",
  answers: [
    "Solo transmisión de normas",
    "Escolarización obligatoria",
    "Socialización primaria y desarrollo integral",
    "Prevención exclusiva del conflicto"
  ],
  correct: 2
},
{
  question: "La violencia filio-parental se define como:",
  answers: [
    "Conflictos puntuales",
    "Violencia ocasional",
    "Conductas reiteradas de violencia hacia progenitores",
    "Violencia exclusivamente física"
  ],
  correct: 2
},
{
  question: "El interés superior del menor debe considerarse:",
  answers: [
    "Un principio orientador",
    "Un derecho sustantivo, interpretativo y norma de procedimiento",
    "Un criterio secundario",
    "Una recomendación"
  ],
  correct: 1
},
{
  question: "La guarda voluntaria se produce cuando:",
  answers: [
    "Existe desamparo",
    "La familia solicita apoyo temporal",
    "Lo decide el juzgado",
    "Se inicia adopción"
  ],
  correct: 1
},

/* =====================================================
   SERVICIOS SOCIALES Y TRABAJO EN RED
===================================================== */

{
  question: "Los Servicios Sociales Generales se caracterizan por:",
  answers: [
    "Alta especialización",
    "Universalidad y proximidad",
    "Atención residencial",
    "Intervención judicial"
  ],
  correct: 1
},
{
  question: "El trabajo en red permite:",
  answers: [
    "Duplicar intervenciones",
    "Optimizar recursos y actuaciones",
    "Evitar coordinación",
    "Delegar responsabilidades"
  ],
  correct: 1
},
{
  question: "La derivación adecuada implica:",
  answers: [
    "Cerrar la intervención",
    "Trasladar el caso sin información",
    "Coordinarse con otros recursos y realizar seguimiento",
    "Evitar intervención posterior"
  ],
  correct: 2
},
{
  question: "El trabajo interdisciplinar se caracteriza por:",
  answers: [
    "Intervención aislada",
    "Superposición de funciones",
    "Coordinación entre profesionales de distintas disciplinas",
    "Jerarquía rígida"
  ],
  correct: 2
},

/* =====================================================
   PARTE COMÚN · ADMINISTRACIÓN Y NORMATIVA
===================================================== */

{
  question: "La condición de vecino en un municipio se adquiere:",
  answers: [
    "Por residencia",
    "Por empadronamiento",
    "Por tributación",
    "Por mayoría de edad"
  ],
  correct: 1
},
{
  question: "Las sesiones del Pleno pueden ser:",
  answers: [
    "Solo ordinarias",
    "Ordinarias o extraordinarias",
    "Ordinarias, extraordinarias o extraordinarias urgentes",
    "Urgentes exclusivamente"
  ],
  correct: 2
},
{
  question: "Las ordenanzas fiscales se aprueban por mayoría:",
  answers: [
    "Absoluta",
    "Simple",
    "Dos tercios",
    "Tres quintos"
  ],
  correct: 1
},
{
  question: "Los actos administrativos son inmediatamente ejecutivos salvo:",
  answers: [
    "Cuando se interponga recurso administrativo",
    "En procedimientos sancionadores recurribles",
    "Cuando haya silencio administrativo",
    "Si lo decide el interesado"
  ],
  correct: 1
},
{
  question: "El silencio administrativo negativo implica:",
  answers: [
    "Estimación de la solicitud",
    "Desestimación presunta",
    "Invalidez del acto",
    "Archivo automático"
  ],
  correct: 1
}

];

export default function App() {
  const EXAM_SIZE = 40;

  const [sound, setSound] = useState(null);
  const [examQuestions, setExamQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [failedList, setFailedList] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function startExam() {
      if (sound) {
    sound.stopAsync();
    sound.unloadAsync();
    setSound(null);
  }
    const indices = questions.map((_, i) => i);

    // Barajar sin repetir (Fisher-Yates)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    setExamQuestions(indices.slice(0, EXAM_SIZE));
    setIndex(0);
    setScore(0);
    setFinished(false);
    setFailedList([]);
    setSelectedAnswer(null);
  }

  function answer(i) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(i);

    const qIndex = examQuestions[index];
    const isCorrect = i === questions[qIndex].correct;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setFailedList(prev => [...prev, qIndex]);
    }

    setTimeout(() => {
      setSelectedAnswer(null);

      if (index + 1 < examQuestions.length) {
        setIndex(prev => prev + 1);
      } else {
        setFinished(true);
      }
    }, 700);
  }

useEffect(() => {
  let isMounted = true;

  async function playMusic() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/music.mp3"),
      { isLooping: true, volume: 0.4 }
    );

    if (isMounted) {
      setSound(sound);
      await sound.playAsync();
    }
  }

  if (examQuestions.length === 0 && !finished) {
    playMusic();
  }

  return () => {
    isMounted = false;
    if (sound) {
      sound.stopAsync();
      sound.unloadAsync();
    }
  };
}, [examQuestions]);

  /* -------- PANTALLA INICIAL -------- */
if (examQuestions.length === 0 && !finished) {
  return (
    <ImageBackground
      source={require("./assets/portada.png")}
      style={styles.cover}
    >
      <View style={styles.overlay}>

        <Text style={styles.coverTitle}>
          ¿Quién quiere ser Educador Social?
        </Text>

        <Text style={styles.coverSubtitle}>
          Entrena como el día del examen
        </Text>

        <TouchableOpacity
          style={styles.startButton}
          onPress={startExam}
        >
          <Text style={styles.startButtonText}>
            Comenzar simulacro
          </Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}


/* -------- PANTALLA FINAL -------- */
if (finished) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen finalizado</Text>

      <Text style={styles.result}>
        Resultado: {score} / {examQuestions.length}
      </Text>

      {failedList.length === 0 && (
        <Text style={{ marginTop: 20, color: "green", fontWeight: "600" }}>
          🎉 Perfecto, no has fallado ninguna pregunta
        </Text>
      )}

      {failedList.length > 0 && (
        <>
          <Text style={{ marginTop: 20, fontWeight: "600" }}>
            Preguntas falladas:
          </Text>

          {failedList.map((qIndex, i) => {
            const q = questions[qIndex];
            return (
              <View key={i} style={styles.reviewItem}>
                <Text style={styles.reviewQuestion}>
                  {q.question}
                </Text>
                <Text style={styles.correctAnswer}>
                  ✔ Respuesta correcta: {q.answers[q.correct]}
                </Text>
              </View>
            );
          })}
        </>
      )}

      <TouchableOpacity
        style={[styles.restart, { backgroundColor: "#4f7cff", marginTop: 20 }]}
        onPress={startExam}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Nuevo simulacro
        </Text>
      </TouchableOpacity>
    </View>
  );
}



  /* -------- PANTALLA DE PREGUNTAS -------- */
  const currentQuestion = questions[examQuestions[index]];
const progress =
  ((index + 1) / examQuestions.length) * 100;
  return (
    <View style={styles.container}>
    <View style={styles.progressContainer}>
  <View
  style={[
    styles.progressBar,
    { width: `${progress}%` }
  ]}
/>
</View>
      <Text style={styles.counter}>
        Pregunta {index + 1} de {examQuestions.length}
      </Text>

      <Text style={styles.question}>
        {currentQuestion.question}
      </Text>

{currentQuestion.answers.map((a, i) => {
  const isCorrect = i === currentQuestion.correct;
  const isSelected = selectedAnswer === i;

  let buttonStyle = styles.button;
  if (selectedAnswer !== null) {
    if (isSelected && isCorrect) buttonStyle = [styles.button, styles.buttonCorrect];
    if (isSelected && !isCorrect) buttonStyle = [styles.button, styles.buttonWrong];
  }

  return (
    <TouchableOpacity
      key={i}
      style={buttonStyle}
      onPress={() => answer(i)}
      disabled={selectedAnswer !== null}
    >
      <Text>{a}</Text>
    </TouchableOpacity>
  );
})}

    </View>
  );
}


/* ======================
   ESTILOS
====================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f8fa"
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 15
  },
  counter: {
    fontWeight: "600",
    marginBottom: 10
  },
  question: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20
  },
button: {
  backgroundColor: "#ffffff",
  padding: 14,
  marginVertical: 8,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#dcdcdc",
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 2
},
  start: {
    backgroundColor: "#4f7cff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  startText: {
    color: "#fff",
    fontWeight: "600"
  },
  result: {
    fontSize: 20,
    fontWeight: "700"
  },
  perfect: {
    marginTop: 20,
    color: "green",
    fontWeight: "600"
  },
reviewItem: {
  backgroundColor: "#ffffff",
  padding: 12,
  marginTop: 10,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#eee"
},
reviewQuestion: {
  fontWeight: "600",
  marginBottom: 6
},
correctAnswer: {
  color: "green",
  fontWeight: "600"
},
  restart: {
  marginTop: 30,
  backgroundColor: "#4f7cff",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3
},
buttonCorrect: {
  backgroundColor: "#d4f7dc",
  borderColor: "#2ecc71"
},
buttonWrong: {
  backgroundColor: "#fde2e2",
  borderColor: "#e74c3c"
},
answerText: {
  fontSize: 16,
  color: "#222"
},
coverContainer: {
  flex: 1
},
coverImage: {
  position: "absolute",
  width: "100%",
  height: "100%"
},
overlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
},
coverTitle: {
  fontSize: 28,
  fontWeight: "bold",
  color: "#fff",
  marginBottom: 30,
  textAlign: "center"
},
startButton: {
  backgroundColor: "#4f7cff",
  paddingVertical: 14,
  paddingHorizontal: 40,
  borderRadius: 14
},
startButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600"
},
cover: {
  flex: 1,
  justifyContent: "center"
},
overlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.55)",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
},
coverTitle: {
  fontSize: 32,
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
  marginBottom: 10
},
coverSubtitle: {
  fontSize: 18,
  color: "#ddd",
  marginBottom: 40,
  textAlign: "center"
},
startButton: {
  backgroundColor: "#4f7cff",
  paddingVertical: 16,
  paddingHorizontal: 40,
  borderRadius: 30,
  elevation: 5
},
startButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600"
},
progressContainer: {
  height: 10,
  backgroundColor: "#e0e0e0",
  borderRadius: 5,
  overflow: "hidden",
  marginBottom: 15
},
progressBar: {
  height: "100%",
  width: "30%",   // de prueba
  backgroundColor: "#4f7cff"
},
});
