
<script lang="ts">
  import {store} from "../../lib/themes.ts"

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


<section>
  <p>
    Autodidact learner, with a passion for creating resilient fault-tolerant software and robust real-time systems.
    Passionate about minimalistic and flat designs. Enjoy keeping these simple.
  </p>
  <br>
</section>


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

<section>
  <!--{#if theme === "dark"}-->

  <!--  <img-->
  <!--          src="/images/whiting/logo/SVG/whiting.logo.horizontal.white.svg"-->
  <!--          alt="JPM"-->
  <!--          style="justify-content: center;width: 45%;display: flex; height: 50%"-->
  <!--  >-->
  <!--  {:else}-->
  <!--  <img-->
  <!--          src="/images/whiting/logo/SVG/whiting.logo.horizontal.blue.svg"-->
  <!--          alt="JPM"-->
  <!--          style="justify-content: center;width: 45%;display: flex; height: 50%"-->
  <!--  >-->
  <!--  {/if}-->
  <p>
    <strong>Johns Hopkins, Baltimore, MD</strong>
  </p>
  <p>
    Masters of Science in Artificial Intelligence & Applied Computational Mathematics.
  </p>
</section>

<section>
  <p>
    <strong>Hobart & William Smith Colleges, Geneva, NY</strong>
  </p>
  <p>
    Bachelor of Arts in Economics, 2013
  </p>

  <p>Scroll Down for more...</p>
</section>






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

<section>
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

<div>
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

  <b><i>New York, NY, (2021 - Present)</i></b>
  <p class="text-xl">Associate, AI ML Engineer, AWM AI Engineering, Asset & Wealth Management
  </p>

  <br>
  <p >
    Assisting Asset and Wealth Management with Client/Prospecting Leads through the use of Applied Machine Learning.
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
  <b><i>New York, NY, (2021 - Present)</i></b>
  <p class="text-xl">Associate, Full-Stack Data Scientist, Global Client Analytics, Global Markets Americas
  </p>
  <br>
  <p>
    Previously, Lead Data Scientist and Infrastructure Manager in the Americas.
    Re-developed client analytics software for Global Markets and Global Banking. Consisting of, ChatBots, Predictive Models,
    data pipelines, infrastructure development and AIML.

    Organized the deployment of Airflow, migrated team to microservices via FastAPI and k8s.

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
  <b>USB Securities, Stamford, CT</b> <i>(2013 - 2015)</i>



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

<div class="tools">

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
      &nbsp; Python, Golang, JavaScript, TypeScript, SQL
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
      &nbsp; FastAPI, Flask, Mux, FastHTTP, Gin Gonic, GraphQL, Apigee
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
      &nbsp; Docker, Kubernetes, Rancher, Docker Swarm
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
      &nbsp; Svelte, SvelteKit, React, HTML5, CSS3, SASS
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
      &nbsp; Postgres, DuckDB, Elasticsearch, MongoDB, Cassandra, DynamoDB, kdb+, SQL Server, Redis
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
      &nbsp; Tableau, PowerBI, Grafana, Kibana, D3.js, Superset
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
      &nbsp; Airflow, Spark, Kafka, Jenkins, TravisCI
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
      &nbsp; Terraform, AWS, GCP, Azure
    </div>
  </div>


</div>

<section>
  <p>
    <strong>Online Self-Paced Learning</strong>
  </p>
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





<!--<div class="row">-->
<!--  <div class="column">-->
<!--    <a href="https://github.com/" rel="external">-->
<!--      {#if theme === "dark"}-->
<!--      <img-->
<!--              src="/images/github-mark-white.svg"-->
<!--              alt="Svelte"-->
<!--              style="width: 100%;height: 100%;"-->
<!--      >-->
<!--      {:else}-->
<!--        <img-->
<!--                src="/images/github-mark.svg"-->
<!--                alt="Svelte"-->
<!--                style="width: 100%;height: 100%;"-->
<!--        >-->
<!--      {/if}-->
<!--    </a>-->

<!--  </div>-->
<!--  <div class="column">-->
<!--    <a href="https://kit.svelte.dev/" rel="external">-->
<!--      <img-->
<!--              src="/images/languages/svelte.svg"-->
<!--              alt="Svelte"-->
<!--              style="width: 100%;height: 100%;"-->
<!--      >-->
<!--    </a>-->
<!--  </div>-->
<!--  &lt;!&ndash;    <div class="column">&ndash;&gt;-->
<!--  &lt;!&ndash;      <img src="img_forest.jpg" alt="Forest" style="width:100%">&ndash;&gt;-->
<!--  &lt;!&ndash;    </div>&ndash;&gt;-->
<!--  <div class="column">-->
<!--    &lt;!&ndash;      <img src="img_mountains.jpg" alt="Mountains" style="width:100%">&ndash;&gt;-->
<!--    <a href="https://python.org/" rel="external">-->
<!--      <img-->
<!--              src="/images/languages/python.svg"-->
<!--              alt="Python"-->
<!--              style="width:100%;height:100%;"-->
<!--      >-->
<!--    </a>-->
<!--  </div>-->
<!--  <div class="column">-->
<!--    <a href="https://python.org/" rel="external">-->
<!--      <img-->
<!--              src="/images/languages/azure.svg"-->
<!--              alt="Azure"-->
<!--              style="width:100%;height: 100%;"-->
<!--      >-->

<!--      &lt;!&ndash;            style="width:50px;height: 60px;"&ndash;&gt;-->
<!--    </a>-->
<!--  </div>-->
<!--</div>-->

