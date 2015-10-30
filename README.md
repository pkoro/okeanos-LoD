


`master branch:` [![master Status](https://api.travis-ci.org/grnet/okeanos-LoD.svg?brach=master)](https://travis-ci.org/grnet/okeanos-LoD/)


`devel branch:` [![devel Status](https://api.travis-ci.org/grnet/okeanos-LoD.svg?brach=devel)](https://travis-ci.org/grnet/okeanos-LoD/)


# okeanos-LoD


~okeanos Lambda on Demand project software repository. Lambda on Demand (or LoD for brevity) is a λ architecture offering by GRNET running on top of the ~okeanos public IaaS cloud service. 

## Fokia library

The Fokia library is responsible for the proviosioning of λ instances on top of the backend ~okeanos IaaS service. A λ instance is a cluster comprised of virtual machines and which implements Apache Flink (a λ engine implementation) for performing stream and batch analytics in real-time and Apache Kafka (message queueing bus) for ingesting input data streams to the engine and consuming results. 

A user may install and use the library (through CLI) following the guidelines [here][ref1]. 

## LoD REST API

The LoD service implements a REST API based on the Django REST API framework through which operations affecting the
- λ instances (owned by the ~okeanos user) and the
- λ applications

Beyond bootstrapping one or more λ instances the API may be used to upload, deploy, start, stop and withdraw λ applications. Documentation for the API (including examples) can be found [here][ref2]. 

## LoD frontend

The LoD service implements a web frontend based on Ember.js. The frontend handles all user instantiated operations via the REST API. Further details can be found [here][ref3].

## Example usage

A WordCount type of example tailored for a Flink + Kafka based λ instance can be found [here][ref4]. The example is comprised of four (4) parts:
- data ingestion (`kafka_producer`)
- stream job
- batch jod and
- results retrieval (`kafka_consumer`) 

[ref1]: /core
[ref2]: /webapp/api-doc/docs/index.md
[ref3]: /webapp/frontend
[ref4]: /example