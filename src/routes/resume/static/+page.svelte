
<script lang="ts">
  import {store} from "../../../lib/themes.ts"
  let theme;

  store.subscribe(value => {
    theme = value;
  });

</script>

<style>

  .center-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /*min-height: 100vh;*/
  }
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  section {
    text-align: center;
    font-size: 1.25rem;
    object-fit: fill;
  }

  .container {
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .tool_image {
    width: 25px;
    height: 25px;
    float: left;
  }
  /*img {*/
  /*  width: 25px;*/
  /*  height: 25px;*/
  /*  float: left;*/
  /*}*/

  /*.column {*/
  /*  float: left;*/
  /*  width: 33.33%;*/
  /*  padding: 5px;*/
  /*}*/

  /*!* Clear floats after image containers *!*/
  /*.row::after {*/
  /*  content: "";*/
  /*  clear: both;*/
  /*  display: table;*/
  /*}*/
  /*img {*/
  /*  width: 60px;*/
  /*  height: 60px;*/
  /*}*/

</style>

<h1 class="font-light text-5xl">Jordan Carson</h1>

<section>
  <p class="text-left">
    <i>Applied AI ML Engineer = Software Engineer + Data Scientist + ML|DevOps + Cloud SRE </i>
  </p>
</section>


<section>
  <div class="center-screen">
    {#if theme === "dark"}

      <img
              src="/images/icons/noun-astronaut-black-clear.svg"
              alt="Bullets"
              style="width: 75px;height: 75px"
      >
    {:else}
      <img
              src="/images/icons/noun-astronaut-white-clear.svg"
              alt="Bullets"
              style="width: 75px;height: 75px"
      >
    {/if}
  </div>
  <p>
    Autodidact AI Engineer with a passion for creating resilient, fault-tolerant and robust real-time software.

    Passionate about - best practices, minimalistic and flat designs, keeping things simple and test driven development.
  </p>
  <br>
</section>

<section>
  <div class="center-screen">
    {#if theme === "dark"}
      <img
              src="/images/icons/noun-academic-degree-1844320-FFFFFF.svg"
              alt="School"
              style="width: 75px;height: 75px"
      >
    {:else}
      <img
              src="/images/icons/noun-academic-degree-1844320.svg"
              alt="School"
              style="width: 75px;height: 75px"
      >
    {/if}
  </div>
  <p>
    <strong>Johns Hopkins, Whiting School of Engineering, Baltimore, MD</strong>
  </p>
  <p>
    M.S. in AI & Computational Mathematics, 2021 - Present
  </p>
</section>

<section>
  <p>
    <strong>Hobart & William Smith Colleges, Geneva, NY</strong>
  </p>
  <p>
    B.A. in Economics, 2009 - 2013
  </p>
</section>

<section>
  <div class="center-screen">
    {#if theme === "dark"}
      <img
              src="/images/icons/noun-cube-5575960-FFFFFF.svg"
              alt="Bullets"
              style="width: 60px;height: 60px"
      >
    {:else}
      <img
              src="/images/icons/noun-cube-5575960.svg"
              alt="Bullets"
              style="width: 60px;height: 60px"
      >
    {/if}
  </div>
    <p>
      •	Adept at applying strategies, plans, and processes enlivening frameworks, capabilities, and tools producing needs-based client business solutions.
    </p><br>
    <p>
      •	Collaborative professional forging pivotal partnerships and relationships with cross-functional teams facilitating problem-solving, trend assessments, new opportunity identification, and integrating best practices enhancing project completion.
    </p><br>
    <p>
      •	Successfully designing, creating, and completing quantitative data research, analysis, mining, and application procedures bolstering feature enhancements, decision-making, and product design.
    </p><br>
</section>



<div>
  <div class="center-screen">
    {#if theme === "dark"}
      <img
              src="/images/icons/noun-building-5616278-FFFFFF.svg"
              alt="Bullets"
              style="width: 60px;height: 60px"
      >
    {:else}
      <img
              src="/images/icons/noun-building-5616278.svg"
              alt="Bullets"
              style="width: 60px;height: 60px"
      >
    {/if}
  </div>
  {#if theme === "dark"}
    <img
            src="/images/icons/JPM_BIG.D.svg"
            alt="JPM"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >

  {:else}
    <img
            src="/images/icons/jpm.svg"
            alt="Bullets"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >
  {/if}

  <b>New York, NY</b>, (2021 - Present)
  <p class="text-xl">Associate, AI ML Engineer, AWM AI Engineering, Asset & Wealth Management
  </p>

  <br>
  <p >
    Assisting Asset and Wealth Management with Client/Prospecting Leads through the use of Applied Machine Learning.
    Additionally, helping Architecture & Engineering with FinOps and Infrastructure Management for Applied Data Science teams.
  </p>
  <br>
</div>
<br>

<div>
  {#if theme === "dark"}
    <img
            src="/images/icons/BNP.PA_BIG.D.svg"
            alt="JPM"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >
  {:else}

    <img
            src="/images/icons/BNP.PA_BIG.svg"
            alt="Bullets"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >
  {/if}
  <b>New York, NY</b>, (2015 - 2021)
  <p class="text-xl">Associate, Full-Stack Data Scientist, Global Client Analytics, Global Markets Americas
  </p>
  <br>
  <p>
    Previously, Lead Data Scientist and Infrastructure Manager in the Americas.
    Re-developed client analytics software for Global Markets and Global Banking. Consisting of, ChatBots, Predictive Models,
    data pipelines, infrastructure development and AIML.

    Organized the deployment of Airflow, migrated team to microservices via FastAPI and Kubernetes.

  </p>

</div>

<div>

  {#if theme === "dark"}
    <img
            src="/images/icons/UBS_BIG.D.svg"
            alt="JPM"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >
  {:else}
    <img
            src="/images/icons/UBS_BIG.svg"
            alt="Bullets"
            style="display: flex;justify-content: left; width: 25%; height: 25%"
    >
  {/if}
  <b>Stamford, CT</b>, (2013 - 2015)

  <p class="text-xl">Analyst, Software Engineer, Group Data Services
  </p>
  <br>
  <p >
    Invented and maintained client on-boarding data warehouse supplying business solutions for pivotal
    clients integrating data and trends research and analysis. Generated pipeline report tools compiling data to craft
    Tableau visualizations and presentations for Senior Management bolstering strategic decision-making capabilities for
    new business opportunities. Configured a client cockpit dashboard employing client on-boarding and capital markets data
    warehouses innovating tools, resources, and solutions.


  </p>
</div>

<div class="tools">
  <div class="center-screen">
    {#if theme === "dark"}
      <img
              src="/images/icons/noun-tools-2137980-FFFFFF.svg"
              alt="Bullets"
              style="width: 60px; height: 60px;"
      >
    {:else}
      <img
              src="/images/icons/noun-tools-2137980.svg"
              alt="Bullets"
              style="width: 60px; height: 60px;"
      >
    {/if}
  </div>
  <div class="container">


    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-translate-alphabet-4373780-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-translate-alphabet-4373780.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>Python</strong>, <strong>Golang</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>SQL</strong>, <strong>Cypher</strong>
    </div>
    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-potions-1778128-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-potions-1778128.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp;<strong>Faiss, NMSLIB, Hugging Face, Torch, Tensorflow, Comet ML</strong>, SageMaker, Snorkel.ai
    </div>

    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-api-1750658-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-api-1750658.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>FastAPI</strong>, Flask, Mux, FastHTTP, <strong>Gin Gonic</strong>, GraphQL, Apigee
    </div>

    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-api-317051-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-api-317051.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp;  <strong>Docker, Kubernetes, Skaffold, Kaniko, Helm, </strong> Rancher, Harbor, Argo
    </div>
    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-api-317051-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-api-317051.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp;  <strong>Jenkins, Spinnaker, Github Actions</strong>, TravisCI, CircleCI
    </div>

    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-flow-1249318-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-flow-1249318.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>Prefect, Airflow, Kafka, SQS, SNS, Event Bridge, Step Functions</strong>
    </div>


    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-database-5079143-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-database-5079143.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>TigerGraph, neo4j</strong>, <strong>Postgres</strong>, <strong>Elasticsearch</strong>, MongoDB, Cassandra, DynamoDB, <strong>SQL Server</strong>, Redis
    </div>

    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-graph-1358766-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-graph-1358766.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>Tableau</strong>, <strong>Kibana</strong>, <strong>d3.js</strong>, PowerBI, Grafana, Superset
    </div>
    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-web-page-1360424-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-web-page-1360424.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>Svelte, <a href="https://kit.svelte.dev/">SvelteKit</a>, Svelte Native, tailwindcss</strong>, NativeScript, <a href="https://tamagui.dev/">Tamagui</a>, Expo, React, SASS
    </div>
    <div class="tool_image">
      {#if theme === "dark"}
        <img
                src="/images/icons/noun-cloud-5610972-FFFFFF.svg"
                alt="Bullets"
        >
      {:else}
        <img
                src="/images/icons/noun-cloud-5610972.svg"
                alt="Bullets"
        >
      {/if}
    </div>
    <div class="text text-xl">
      &nbsp; <strong>AWS</strong>, <strong>Azure</strong>, <strong>Terraform</strong>, GCP
    </div>

  <br>
  </div>
</div>


<div class="center-screen">
  {#if theme === "dark"}
    <img
            src="/images/icons/noun-self-discipline-1985526-FFFFFF.svg"
            alt="Bullets"
            style="width: 60px; height: 60px;"
    >
  {:else}
    <img
            src="/images/icons/noun-self-discipline-1985526.svg"
            alt="Bullets"
            style="width: 60px; height: 60px;"
    >
  {/if}
</div>
<section>
  <i>Udacity</i>
  <p>
    Machine Learning -
    Artificial Intelligence, with
    Natural Language Processing -
    Deep Learning - Data Structures and Algorithms
  </p>
</section>

<section>
  <i>Coursera</i>
  <p>
    Statistics with Python -
    Mathematics for Machine Learning -
    Calculus I, II -
    Linear Algebra -
    Differential Equations -
    Discrete Math - Stochastic Calculus -
    <u>Vector Calculus and Complex Analysis</u>
  </p>


</section>