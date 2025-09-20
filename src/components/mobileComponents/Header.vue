<script setup>
</script>

<template>
    <div class="sh-buttons">
          <ul>
            <li>
                <a href="https://ca.linkedin.com/in/muhammad-asim-salman-653864282"> 
                    <div class="sh-btn" id="sh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="sh-icon" height="35" width="35" viewBox="0 0 1024 1024">
                            <path d="M873.386667 85.333333H150.613333a61.866667 61.866667 0 0 0-62.72 61.013334v731.306666A61.866667 61.866667 0 0 0 150.613333 938.666667h722.773334a61.866667 61.866667 0 0 0 62.72-61.013334V146.346667A61.866667 61.866667 0 0 0 873.386667 85.333333zM345.173333 799.573333h-128v-384h128zM281.173333 361.813333a66.56 66.56 0 1 1 0-133.12 66.986667 66.986667 0 1 1 0 133.12z m525.653334 437.76h-128v-206.08c0-51.626667-18.346667-85.333333-64.853334-85.333333A70.4 70.4 0 0 0 548.266667 554.666667a85.333333 85.333333 0 0 0-4.266667 31.146666v213.333334h-128v-384h128V469.333333a128 128 0 0 1 115.626667-64c85.333333 0 147.2 55.04 147.2 173.226667z"/>
                        </svg>
                    </div>
                </a>
            </li>
            <!-- <li>
                <div class="sh-text font-[Logo] text-[1.8rem] pt-[9px] whitespace-nowrap"><span>M-ASIM</span></div>
            </li> -->
            <li>
                <a href="https://github.com/AsimS468"> 
                    <div class="sh-btn" id="sh-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="sh-icon" height="35" width="35" viewBox="0 0 1024 1024">
                            <path d="M170.666667 85.333333 853.333333 85.333333C900.266667 85.333333 938.666667 123.733333 938.666667 170.666667L938.666667 853.333333C938.666667 900.266667 900.266667 938.666667 853.333333 938.666667L633.6 938.666667C618.666667 935.253333 618.666667 906.24 618.666667 896L618.666667 779.093333C618.666667 739.413333 604.586667 713.386667 589.226667 700.16 684.373333 689.493333 784.213333 653.653333 784.213333 490.666667 784.213333 443.306667 768 405.333333 740.266667 375.04 744.533333 364.373333 759.466667 320 736 262.4 736 262.4 700.16 250.88 618.666667 305.92 584.96 296.533333 548.266667 291.84 512 291.84 475.733333 291.84 439.04 296.533333 405.333333 305.92 323.84 250.88 288 262.4 288 262.4 264.533333 320 279.466667 364.373333 283.733333 375.04 256 405.333333 239.786667 443.306667 239.786667 490.666667 239.786667 653.226667 339.2 689.92 433.92 700.586667 421.973333 711.253333 410.88 730.026667 407.04 757.76 382.72 768 320 787.2 282.88 722.346667 282.88 722.346667 260.266667 681.386667 217.6 678.4 217.6 678.4 175.786667 677.546667 213.333333 704 213.333333 704 242.346667 717.226667 261.973333 766.72 261.973333 766.72 287.146667 849.493333 405.333333 823.893333L405.333333 896C405.333333 906.24 405.333333 935.253333 389.973333 938.666667L170.666667 938.666667C123.733333 938.666667 85.333333 900.266667 85.333333 853.333333L85.333333 170.666667C85.333333 123.733333 123.733333 85.333333 170.666667 85.333333Z"/>
                        </svg>
                    </div>
                </a>
            </li>
        </ul>
        </div>
</template>

<style scoped>
    .sh-buttons{
        justify-content: center ;
        padding-top: -10px;
        
      }

      .sh-buttons ul{
        list-style: none;
        display: flex;
        position: fixed;
        padding: 0;
        transition: all 0.2s ease;
        align-items: center;
        width: 100vw;
        justify-content: space-between;
      }

      .sh-buttons ul li{
        padding: 0 15px;
      }

      .sh-text{
        justify-content: center;
        align-items: center;
        
    
      }
      
      .sh-btn{
        display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 35px;
            height: 35px;
            background: #2a2a2a;
            border: 1px solid #1a1a1a;
            border-radius: 10px;
            cursor: pointer;
            position: relative;
            transition-duration: .2s;
            box-shadow: 0px 0px 0px 1px #00000033;
      }

      .sh-btn:hover{
        background: #3a3a3a;
      }

      .sh-icon{
        width: 70%;
        transition-duration: .2s;
        display: flex;
        align-items: left;
        justify-content: center;
        fill: #b5b5b5;
        margin-top: 0px;
        margin-left: 5px;
        
      }

      .sh-btn:hover .sh-icon{
        fill: #ffffff;
      }


</style>