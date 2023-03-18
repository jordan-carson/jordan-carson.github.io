
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
  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  /*img {*/
  /*  width: 60px;*/
  /*  height: 60px;*/
  /*}*/

</style>

<h1 class="font-light text-5xl">Jordan Carson</h1>

<section>
  <p class="text-left">
    <i>Applied AI ML Engineer = ML Engineer + Data Scientist + ML|DevOps + Cloud SRE </i>
  </p>
</section>

<div class="center-screen">
  {#if theme === "dark"}
    <img
            src="/images/icons/astronaut.png"
            alt="Bullets"
            style="width: 60px;height: 60px"
    >
  {:else}
    <img
            src="/images/icons/astronaut.png"
            alt="Bullets"
            style="width: 60px;height: 60px"
    >
  {/if}
</div>

<section>
  <p>
  Autodidact learner, with a passion for creating resilient fault-tolerant software, microservices, Language Models, and robust real-time systems.
  </p>
  <br>
</section>


<div class="center-screen">
  {#if theme === "dark"}
    <img
            src="/images/icons/cube.png"
            alt="Bullets"
            style="width: 60px;height: 60px"
    >
  {:else}
    <img
            src="/images/icons/cube.png"
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
            src="/images/icons/building.png"
            alt="Bullets"
            style="width: 60px;height: 60px"
    >
  {:else}
    <img
            src="/images/icons/building.png"
            alt="Bullets"
            style="width: 60px;height: 60px"
    >
  {/if}
</div>

<div>


  <img
          src="/images/icons/jpm.svg"
          alt="JPM"
          style="display: flex;justify-content: left; width: 25%; height: 25%"
  >
  <b><i>New York, NY, (2021 - Present)</i></b>
  <p class="text-xl">Associate, AI ML Engineer, AWM AI Engineering, Asset & Wealth Management
  </p>



  <br>
  <p >
    Assisting with Client/Prospect Leads for Asset and Wealth Management through the use of Applied Machine Learning.
    Creation of Knowledge Graph via neo4j and News Analytics Platform via golang for microservices and python for machine learning.
    Entire Infrastructure is on AWS and managed via Terraform.
  </p>

  <br>
</div>
<br>

<div>
  <img
          src="/images/icons/bnp-paribas-2.svg"
          alt="BNP"
          style="
          /*justify-content: left;*/
          /*width: 18%;*/
          /*height: 80%;*/
          /*max-height: 120px;"
  >
  <i><b>New York, NY, </b>2015 - 2021, {2021 - 2015} Years</i>
  <p class="text-xl">Associate, Data Scientist, Global Client Analytics, Global Markets Americas
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
            src="/images/icons/tools.png"
            alt="Bullets"
            style="width: 60px; height: 60px;"
    >
  {:else}
    <img
            src="/images/icons/tools.png"
            alt="Bullets"
            style="width: 60px; height: 60px;"
    >
  {/if}
</div>

<section>
  More on its way...!
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

